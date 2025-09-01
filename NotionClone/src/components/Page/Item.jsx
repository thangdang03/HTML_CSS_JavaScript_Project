import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import {  useEffect, useState } from "react";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "../ui/sidebar";
import { ChevronDown, ChevronRight, File, Plus } from "lucide-react";
import { getDataByParentID, insertData } from "@/utils/superbase.client";

const Item = ({item,setData,user,data}) => {
    const [open,setOpen] = useState(false)
    const [dataGet,setGet] = useState([])

    const getData = async () =>{
        const dataChild= await getDataByParentID(item.id);
        setGet(dataChild);
    }
    
    const addChildPage = async(id) =>{
        const page = {
            user_id: user.id,
            parent_id: id
        } 
        const result = await insertData(page);
        console.log(result)
        if(!result) return;
        await getData()
        setData(result[0])
        if(!open) setOpen(true); 
    }

    useEffect(()=>{
        if(!open) return;
        getData()
    },[open,data])

    return (  
        <Collapsible 
            defaultOpen 
            className=" m-0 p-0  "
            open={open}
			onOpenChange={setOpen}
        >
            <SidebarMenuItem className=" m-0 p-0 relative " >
                <div className="w-[100%] h-fit relative">
                    <SidebarMenuButton className="flex justify-between "  >
                        {open?
                            <ChevronDown className="cursor-pointer" onClick={()=>{setOpen(open?false:true) }}/>:
                            <ChevronRight className="cursor-pointer"  onClick={()=>{setOpen(open?false:true)}} />
                        }
                        <div className="flex flex-nowrap items-center gap-[5px] w-[85%] cursor-pointer" onClick={()=>{setData(item)}}>
                            {!item.icon?<File className="w-[20px] h-[20px]"  />:item.icon}
                            <p className="w-[55%] overflow-hidden text-ellipsis w-[100%] text-nowrap">{item.name}</p>
                        </div>
                        
                         <Plus className=" w-[17px] h-[17px] cursor-pointer" onClick={()=>{addChildPage(item.id)}}/>
                    </SidebarMenuButton>
                </div>

              <CollapsibleContent>
                <SidebarMenuSub className="m-0 p-[0px 0px 0px 5px]">
                    {dataGet?.length > 0 ? 
                        dataGet.map(item=>{
                            return(
                                <Item 
                                    item={item}
                                    setData={setData}
                                    key={item.id}
                                    user={user}
                                    data={data}
                                />
                            )
                        }):
                        <p className="pl-[20px] text-[13px]">Empty pages</p>
                    }
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
}
 
export default Item;