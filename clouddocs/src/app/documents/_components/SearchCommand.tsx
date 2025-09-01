'use client';
import { useSupabase } from "@/lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import {
  CommandDialog,
} from "@/components/ui/command";
import { File, Loader, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebouce";
import { useUserId } from "@/hooks/useUserId";
import Link from "next/link";

const SearchCommand = () => {
    const [dataList,setDataList] = useState<any>([]);
    const [errorList, setError] = useState<PostgrestError | null>(null);
    const [loadingList, setLoading] = useState<boolean>(false);
    const [open,setOpen] = useState<boolean>(false);
    const [value,setValue] = useState("");
    const valueDebounce = useDebounce(value,1000);
    const userId = useUserId();
    
    const search = async () =>{
        if(!userId ) return;
        console.log(valueDebounce)
        setLoading(true);
        const {data, error} = await useSupabase().searchDocuments(valueDebounce,userId);
        
        setDataList(data);
        if (error) {
            setLoading(false);
            setError(error);
        } 

        setLoading(false);

    }
   
    useEffect(()=>{
        if(!valueDebounce || !userId) return;
        search()
    },[valueDebounce,userId])
    

    return (  
        <>
            {/*dialog command trickger*/}
            <div className="w-full max-w-md hidden md:block cursor-pointer" onClick={() => setOpen(!open)} >
                <div className="relative " >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                        autoComplete="off"
                        type="text"
                        placeholder="Search documents..."
                        className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {/*dialog command content*/}
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                className="min-h-[200px] max-h-[400px] "
            >
                <div className="w-full mt-2 min-h-[150px] max-h-[300px] ">
                    <div className="flex p-2 flex-nowrap items-center justify-start border-b-zinc-200 border-b-solid border-b-[1px]">
                        <Search className="size-4 text-zinc-400 "/>
                        <input 
                            type="text"
                            onChange={(e)=>{setValue(e.target.value)}}
                            placeholder="Search Documents..." 
                            className="focus:outline-none w-[90%] px-2"
                        />
                    </div>
                    {loadingList && 
                        <div className="w-ful h-full flex justify-center items-center">
                            <Loader className="size-3 text-zinc-400 animate-spin" />
                        </div>
                    }
                    {   
                        dataList.length > 0 ? 
                            <div className={loadingList ? "hidden": "w-full px-2 flex flex-wrap"}>
                                {
                                    dataList?.map((item:any)=>{
                                        return(
                                            <Link
                                                key={item?.id}
                                                href={`/documents/${item?.id}`}
                                                className="w-full flex flex-nowrap items-center justify-start p-2 hover:bg-zinc-200 rounded-md"
                                            >
                                                <File className="size-4 mr-2 text-blue-500" />
                                                {item?.name}
                                            </Link>
                                        )
                                    })
                                }
                                
                                
                            </div>:
                            <div className="w-full h-fit p-2">
                                <span className="font-[15px] text-zinc-600">
                                    Not found result
                                </span>
                            </div>

                    }
                    {
                        errorList && 
                         <div className="w-full h-fit p-2">
                                <span className="font-[15px] text-red-900">
                                    Server is error!!! 
                                </span>
                            </div>
                    }
                </div>    
            </CommandDialog>
        </>
    );
}
 
export default SearchCommand;