import { Trash, Undo2 } from "lucide-react";
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
 } from "../ui/command";
import { deletePageById, getDataDelete, updatePage2 } from "@/utils/superbase.client";
import { useEffect, useState } from "react";

const TrashList = ({openTrash,setOpenTrash,user,setData}) => {
    const [listDelete,setListDelete] = useState(null)
    
    const getData = async () =>{
      const results = await getDataDelete(user.id)
      setListDelete(results)
    }

    const restorePage = async(e,item)=>{
      e.stopPropagation();
      const result = await updatePage2(item.id,{is_delete: false});
      setData(result[0])
      setOpenTrash(false)
    }

    const deletePage = async (e,id) =>{
      e.stopPropagation();
      const result = await deletePageById(id)
      if(!result) return;
      await getData()
    }
    useEffect(()=>{
      if(!user || !open) return;
      getData();
    },[openTrash])
    return (  
    <CommandDialog open={openTrash} onOpenChange={setOpenTrash}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {listDelete?.map(item=>{
              return(
                <CommandItem  key={item.id} >
                  <div className="w-[100%] h-fit relative group z-0" onClick={()=>{console.log("test")}}>
                    <span>{!item.icon?"     " : item.icon} {item.name}</span>
                    <div className="hidden group-hover:flex pointer-events-auto w-fit  h-fit p-2  flex-wrap gap-[10px] absolute top-[-6px] z-2 right-[0px]">
                      <button className="cursor-pointer active:scale-[0.9]" onClick={(e)=>{restorePage(e,item)}}>
                        <Undo2 className="w-[20px]"  />
                      </button>
                      <button className="cursor-pointer"  onClick={(e)=>{deletePage(e,item.id)}}>
                        <Trash className="cursor-pointer"/>
                      </button>
                    </div>
                  </div>
                </CommandItem>
              )
            })}

            
          </CommandGroup>
        </CommandList>
        
      </CommandDialog>
    );
}
 
export default TrashList;