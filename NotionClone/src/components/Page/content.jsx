  import { debounce } from "@/utils/debounce"
  import { Check, Copy, Ellipsis, Globe, Image, Trash, X } from "lucide-react"
  import { useCallback, useEffect, useState } from "react"
  import { Button } from "../ui/button"
  import { publicPage, updatePage, updatePage2 } from "@/utils/superbase.client"
  import IconPicker from "../items/icon"
  import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
  import Background from "../items/background"
  import Note from "./note"


  const Content = ({data,setData,setListData,user}) => {
    const [name,setName] = useState(data.name || "")
    const [background,setBackground] = useState(data.background || null)
    const [copy,setCopy] = useState(false)
    const [open,setOpen] = useState(false)
    

    const changeName = async (newName) =>{
      const result = await updatePage(data.id,{name: newName});
      setData(result[0]);
    }
    const debouncedChangeName = useCallback(debounce(changeName, 800), [data.id]);

    const copyClipBroad = async () =>{
      await navigator.clipboard.writeText(data.is_public);
      setCopy(true);
      setTimeout(()=>{
        setCopy(perv => false);
      },1000)
    }

    const publicPages = async () =>{
      const urlPublic = location.origin +"/Share/" + data["id"];
      const result = await publicPage(data.id,urlPublic)
      if(!result){
        return;
      }
      setData(result[0])
    }

    const unPublicPages = async () =>{
      const result = await publicPage(data.id,null)
      if(!result){
        return;
      }
      setData(result[0])
    }

    const deletePage = async () =>{
      const result = await updatePage(data.id,{is_delete:  true })
      if(!result){
        return;
      }
      setData(null)
    }

    const removeIcon = async () =>{
      const result = await updatePage2(data.id,{icon: null})
      setData(result[0])
    }

    const removeBackground = async () =>{
      const result = await updatePage2(data.id,{background: null})
      setData(result[0])
      setOpen(false)
    }

    useEffect(()=>{
      setName(data.name)
    },[data])
    
    return (  
      <div className="w-full min-h-[100dvh]">
        <header className="w-full h-fit flex justify-center items-center">
            <nav className="w-[95%] h-[56px] flex justify-between items-center">
              <div>
                <input type="text" value={name}  onChange={(e)=>{
                  setName(e.target.value) ;
                  debouncedChangeName(e.target.value)
                }}/>
              </div>
              <div className="w-[10%] flex justify-center items-center gap-[20px]">
                  <DropdownMenu >
                    {
                      !data.is_public?
                      <DropdownMenuTrigger asChild>
                        <span className="cursor-pointer font-medium">Publish</span>
                      </DropdownMenuTrigger>
                      :
                      <DropdownMenuTrigger asChild>
                        <span className="cursor-pointer">unPublish</span>
                      </DropdownMenuTrigger>
                    }
                      <DropdownMenuContent className="w-[300px]" side="bottom" align="end">
                        {!data.is_public?
                          <div className="w-[100%] p-2 flex flex-col justify-around gap-[5px] items-center">
                                  <Globe className="inline w-[40px] h-[40px] text-zinc-500 "/>
                                  <h3 className="font-medium text-[17px]">Publish this note</h3>
                                  <p className="text-zinc-500 font-medium">Share your work with other</p>
                                  <Button className="w-[100%] cursor-pointer" onClick={()=>{publicPages()}}>
                                    Publish
                                  </Button>
                          </div>:
                          <div className="w-100% p-2 flex flex-col justify-start gap-[20px] items-center">
                                  <div className="flex flex-nowrap flex-start w-[100%] gap-[5px] items-center text-blue-500">
                                    <Globe className="w-[20px] h-[20px]"/>
                                    <span className="text-[15px]">This page is live on web</span>
                                  </div>
                                  <div className="w-[100%] h-fit flex flex-nowrap gap-0">
                                    <input type="text" className="p-2 w-[75%] text-[13px] overflow-hidden text-ellipsis bg-zinc-200 rounded-l-[5px]" disabled value={data.is_public} />
                                    <Button className="rounded-l-[5px] w-[25%]  cursor-pointer" onClick={()=>{copyClipBroad()}}>
                                      {!copy? 
                                        <Copy/>:<Check />
                                      }
                                    </Button>
                                  </div>
                                  <Button className="w-[100%] cursor-pointer" onClick={()=>{unPublicPages()}}>
                                    UnPublish
                                  </Button>
                          </div>
                        }
                      </DropdownMenuContent>
                  </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className="w-[20px] h-[20px] cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]  p-4 flex flex-col gap-[10px]" side="bottom" align="end">
                        <div className="flex flex-nowrap items-center gap-[10px] text-[13px] cursor-pointer" onClick={()=>{deletePage()}}>
                          <Trash className="w-[15px] h-[15px]" />
                          <span>delete page</span>
                        </div>
                        <DropdownMenuSeparator/>
                        <span className="text-[12px] text-zinc-500">last edited by {user?.username}</span>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
        </header>
        <section className="main h-fit flex justify-center items-center flex-wrap mb-[300px]">
          {data.background &&
            <div className="background relative h-[225px] w-[100%] bg-amber-300 group ">
              <img loading="lazy" decoding="async" src={data.background} alt={name} className="w-[100%] h-[100%] object-cover object-center" />
              <div className=" group-hover:flex flex justify-center items-center gap-[20px]  absolute bottom-4 right-4">
                  <button onClick={()=>{setOpen(!open?true:false)}} className=" hidden group-hover:flex p-2 text-[13px] rounded-[5px] bg-zinc-100 text-zinc-500  items-center cursor-pointer flex-nowrap gap-[5px] active:scale-[0.95]">
                    <Image className="w-[13px] h-[13px]" /> 
                    Change background
                  </button>
                  <button onClick={()=>{removeBackground()}} className=" hidden group-hover:flex p-2 text-[13px] rounded-[5px] bg-zinc-100 text-zinc-500  items-center cursor-pointer flex-nowrap gap-[5px] active:scale-[0.95]">
                    <X className="w-[13px] h-[13px]"/>
                    Remove background
                  </button>
              </div>
            </div>
          }
          <div className="context w-[70%] mt-[20px]">
            <div className="group">
              {data.icon && 
                <div className="relative w-fit group">
                  <h3 className="text-[50px]">{data.icon}</h3>
                  <X onClick={()=>{removeIcon()}} className=" hidden absolute top-[-10px] right-[-20px] text-zinc-500 w-[20px] h-[20px] group-hover:block cursor-pointer" />
                </div>
              }
              <div className="flex justify-start items-center gap-4 invisible group-hover:visible">
                {!data.icon && 
                <IconPicker 
                  setData={setData}
                  data={data}
                />}
                <Background
                  data={data}
                  setData={setData}
                  open={open}
                  setOpen={setOpen}
                /> 
              </div>
              <h1 className="text-[50px] font-bold">{data.name}</h1>
            </div>
            <Note
              data={data}
              setData={setData}
            />
          </div>
        </section>
      </div>
    );
  }
  
  export default Content;