import { Sidebar, SidebarContent, SidebarFooter,SidebarHeader, SidebarMenu, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import {  UserButton } from "@clerk/clerk-react";
import {  ChevronsLeft, CirclePlus, Command, Plus, Search, Settings, Trash } from "lucide-react";
import Item from "./Item";
 
const PageSidebar = ({data,addNewData,user,setOpenSearch,openSearch,openSetting,setOpenSetting,openTrash,setOpenTrash,listData,setData}) => {
  const {setOpen} = useSidebar()
  return (
    <Sidebar 
      variant="sidebar"
      className="w-[20rem]  h-[100dvh] text-zinc-500 font-medium text-[15px]"
      
    >
      <SidebarHeader className="text-black dark:text-white">
          <SidebarMenu >
            <SidebarMenuButton className=" p-0 flex justify-between">
              <span className="flex items-center justify-around gap-2" >
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonPopoverCard: 'bg-red-500  absolute !left-[7px] !w-[14rem]',
                      },
                    }}
                  /> 
                  {user.username}
              </span>
              <ChevronsLeft onClick={()=>{setOpen(false)}} className=" w-[20px] h-[20px] cursor-pointer "/>
            </SidebarMenuButton>
          </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="" >
        <SidebarMenu>
          <SidebarMenuButton asChild className="cursor-pointer" >
            <div onClick={()=>{setOpenSearch(!openSearch?true:false)}}>
              <Search className="w-[18px] "/>
              <span>Search</span>
            </div>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="cursor-pointer">
            <div onClick={()=>{setOpenSetting(!openSetting?true:false)}}>
              <Settings className="w-[18px] " />
              <span>Setting</span>
            </div>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="cursor-pointer">
            <div>
              <CirclePlus className="w-[18px] "/>
              <span>New Page</span>
            </div>
          </SidebarMenuButton>
          {listData?.map(item=>{
            return(
              <Item
                setData={setData}
                key={item.id}
                item={item}
                user={user}
                data={data}
              >
              </Item>
            )
          })}

          <SidebarMenuButton asChild className="cursor-pointer" onClick={()=>{addNewData()}}>
            <div>
              <Plus className="w-[18px] "/>
              <span>Add New Page</span>
            </div>
          </SidebarMenuButton>

          <SidebarMenuButton asChild className="cursor-pointer">
            <div onClick={()=>{setOpenTrash(!openTrash?true:false)}}>
              <Trash className="w-[18px] "/>
              <span>Trash</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenu>
        
      </SidebarContent>
      
    </Sidebar>
  )
}
 
export default PageSidebar;