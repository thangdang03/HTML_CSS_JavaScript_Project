'use client'
import { EllipsisVertical, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useSupabase } from "@/lib/supabase";
import { useUserId } from "@/hooks/useUserId";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "../utils/Date";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

const ListDocuments = () => {
    const [loading,setLoading] = useState<boolean>(false)
    const [dataList,setData] = useState<any>([])
    const router = useRouter();
    const userid = useUserId();
    let limit = 5;

    const getData = async(id:string) => {
        try {
            setLoading(true)
            const {data} = await useSupabase().getDocuments(id,limit)
            setData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw new Error('fetching data is error')
        }
        
    }

    const deleteDoument = async(id:string) =>{
        try {
            if(!id || !userid) return;
            const {data,error} = await useSupabase().deleteDocument(id)
            setLoading(true)
            const {data: ListDocument} = await useSupabase().getDocuments(id,limit)
            setData(ListDocument)
            setLoading(false)
            toast.success('Delete Document success');
            
        } catch (error) {
            console.log(error)
            toast.error('Delete Document not success');
        }
    }

   
    useEffect(()=>{
        // getData();
        if(!userid) return;
        getData(userid)
    },[limit,userid])

    if(loading) return(
        <section className="w-full px-4">
            <div className="max-w-7xl mx-auto bg-white ">
                <table className="w-full ">
                    <thead>
                        <tr >
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
                            <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 ">Shared</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Created at</th>
                            <th className="px-6 py-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition-colors ">
                            <td colSpan={4} >
                                <Skeleton className="w-full h-64" />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </section>
    )
    return (
        <section className="w-full px-4">
            <div className="max-w-7xl mx-auto bg-white min-h-[200px] max-h-[400px]">
                <table className="w-full ">
                    <thead>
                        <tr >
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
                            <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 ">Shared</th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Created at</th>
                            <th className="px-6 py-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList?.map((item:any) =>{
                            return(
                                <tr className="hover:bg-gray-50 transition-colors border-b-black">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-5 w-5 text-blue-600" />
                                            <span className="text-sm text-gray-900">{item?.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center px-2.5 py-0.5  text-xs font-medium  text-gray-800">
                                            {item?.shared ? "Personal" : "Organization" }
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        {formatDate(item?.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="focus:outline-none">
                                                <EllipsisVertical className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem
                                                    onClick={()=>{router.push(`/documents/${item?.id}`)}}
                                                >
                                                    Open
                                                </DropdownMenuItem>
                                                <DropdownMenuItem 
                                                    onClick={()=>{deleteDoument(item?.id)}}
                                                    className="text-red-600
                                                ">
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {dataList?.length < 5  || !dataList ?
                <></>:
                <div className="flex justify-center items-center">
                <button className="text-[15px] font-medium hover:bg-zinc-100 hover:shadow-lg active:scale-[0.9] px-4 py-2 rounder-md cursor-pointer">
                    load more
                </button>
            </div>
            }
        </section>
    );
}

export default ListDocuments;