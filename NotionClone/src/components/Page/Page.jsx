import PageSidebar from "./sidebar";
import { data, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { SidebarProvider }  from "@/components/ui/sidebar";
import {  useUser } from "@clerk/clerk-react";
import Loading from "../items/loadding";
import TriggerSidebar from "./Trigger";
import SearchPage from "./search";
import Setting from "./setting";
import TrashList from "./Trask";
import {  getDataById, insertData } from "@/utils/superbase.client";
import banner from "../../../public/oc-thinking.png";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import Content from "./content";
const Page = () => {
  let navigate = useNavigate();
  const {isLoaded,user} =  useUser();
  const [openSearch,setOpenSearch] = useState(false);
  const [openSetting,setOpenSetting] = useState(false);
  const [openTrash,setOpenTrash] = useState(false);
  const [listData,setListData] = useState([]);
  const [Data,setData] = useState(null);

  const getList = async () =>{
    const data = await getDataById(user.id);
    setListData(data)
  }

  const addNewData = async () =>{
    const page = {
      user_id: user.id,
    }
    const status = await insertData(page)
    setData(status[0])
    setListData(prev => [...prev , status[0]])
  }

  useEffect(()=>{
    // checking user login
    console.log(user)
    if(user === undefined){
      return;
    }
    if(user == null){
      navigate("/")
    }
    getList();
  },[user])

  useEffect(()=>{
    if(!user) return;
    getList()
  },[Data])

  if(!isLoaded){
    return <div className="w-[100%] h-[100dvh] flex items-center justify-center">
        <Loading/>
    </div>;
  }

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "10rem",
      }}
      defaultOpen={true}
      className="h-[100dvh]"
    >
      <PageSidebar
        user={user}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        openSetting={openSetting}
        setOpenSetting={setOpenSetting}
        openTrash={openTrash}
        setOpenTrash={setOpenTrash}
        listData={listData}
        setData={setData}
        addNewData={addNewData}
        data={Data}
      />
      <main className="w-[100%] h-[100dvh] ">
        <TriggerSidebar  />
        {!Data ?
          <div className="w-full h-full flex justify-center items-center ">
              <div className="w-[300px] h-[300px] flex justify-center items-center flex-wrap gap-[15px]">
                <img src={banner} alt="banner" className="dark:invert" />
                <h3 className="font-bold ">Welcome to the Notion application </h3>
                <Button onClick={()=>{addNewData()}} >
                    <CirclePlus />
                    Create a new page
                </Button>
              </div>
          </div>:
          <Content
            data={Data}
            setData={setData}
            setListData={setListData}
            user={user}
          />
        }

        <SearchPage
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
          user={user}
          setData={setData}
          data={Data}
        />
        <Setting
          openSetting={openSetting}
          setOpenSetting={setOpenSetting}
        />
        <TrashList
          openTrash={openTrash}
          setOpenTrash={setOpenTrash}
          setData={setData}
          user={user}          
        />
      </main>        
    </SidebarProvider>
  );
}
 
export default Page;