import { useEffect, useState } from "react";
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
 } from "../ui/command";
import { getDataByUserId } from "@/utils/superbase.client";


const SearchPage = ({openSearch,setOpenSearch,user,setData,data}) => {
    const [listSearch,setListSearch] = useState([])

    const getData = async () =>{
      const results = await getDataByUserId(user.id)
      setListSearch(results)

    }

    const selectItem = (item) =>{
      console.log("")
      setData(item)
      setOpenSearch(false)
    }

    useEffect(()=>{
      if(!user) return;
      getData();
    },[openSearch])
    return (  
      <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" >
            {listSearch?.map(item=>{
              return(
                <CommandItem key={item.id} className="m-2 !p-1 h-fit" >
                  <div className="m-2 cursor-pointer w-[100%]" onClick={()=>{selectItem(item)}} > {item.name}</div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
        
      </CommandDialog>
    );
}
 
export default SearchPage;