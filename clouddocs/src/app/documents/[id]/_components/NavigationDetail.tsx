'use client';
import Image from "next/image";
import logo from "@Public/logo.png"
import {jsPDF} from"jspdf"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Bell, Bold, ChevronRight, CloudCheck, File, FileCheck2, FileJson, FilePen, FilePlus, FileType, GlobeIcon, Grid2x2Plus, Italic, Loader, Printer, Redo, Table, Trash, Underline, Undo } from "lucide-react";
import { MenubarSub, MenubarSubContent, MenubarSubTrigger } from "@radix-ui/react-menubar";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button";
import RoomUser from "./editors/RoomUser/RoomUser";
import { CollaborativeApp } from "./editors/CollaborativeApp";
import { useUserId } from "@/hooks/useUserId";
import { useSupabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import InputNav from "./InputNav";
import { useRouter } from "next/navigation";


const NavigationDetail = ({editor}:{editor:any}) => {
    const [loading,setLoading] = useState<boolean>(false);
    const {id} = useParams();
    const [data,setData] = useState<any>();
    const route= useRouter();
    const userId = useUserId();
    const getData = async () => {
        try {
            if(Array.isArray(id))return;
            const data = await useSupabase().getDocumentById(id)
            setData(data)
        } catch (error) {
            console.log(error)
            throw new Error(" fetching is error")
        }
    }

    const DeleteDocument = async () =>{
        try {
            if(!id || Array.isArray(id)) return;
            const data = await useSupabase().deleteDocument(id)
            if(!data) route.push("/documents");
        } catch (error) {
            console.log(error)
            throw new Error(" fetching is error")
        }
    }
    // function handel download file
    const  download = (fileContent: string | null, fileName: string,type: string):void =>{
       if(!fileContent || !fileName || !type) return;
       switch (type) {
        case "application/json":
            fileName += ".json"
            break;
        case "text/html":
            fileName += ".html"
            break;
        case "text/plain":
            fileName += ".txt"
            break;
       }

       if(window.confirm(`bạn muốn tải file ${fileName} chứ?`)){
             // create Blob object file
            const blob = new Blob([fileContent], { type: type });
            const url =  URL.createObjectURL(blob)
            // create link tag 
            const a = document.createElement("a");
            a.href = url
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.removeChild(a)
            URL.revokeObjectURL(url);
       }
    }

    const downloadPdf = (fileContent: string | null, fileName: string):void =>{
        if(!fileContent || !fileName ) return;
        fileName+=".pdf";
        console.log(fileContent)
        // create file pdf 
        const doc = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: "a4"
        });
        doc.text(fileContent, 10, 10);
        const blob = doc.output("blob")
        const url = URL.createObjectURL(blob)
        // create link tag 
        const a = document.createElement("a");
        a.href = url
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.removeChild(a)
        URL.revokeObjectURL(url);
    }

    // function handle insert table
    const insertTable = (rows: number , col:number) =>{
         editor?.chain().focus().insertTable({ rows: rows, cols: col , withHeaderRow: true}).run()
    }

    const printf = ():void =>{
        window.print();
    }

    useEffect(()=>{
        if(!userId || !id) return;
        getData()
    },[userId,id])
    return (
        <header className="w-full">
            <nav className="flex justify-between items-center h-[56px] px-3 py-2 font-sans">
                {/* section navigation button*/}
                <div className="flex flex-wrap">
                    <Link href="/documents" className="flex items-center gap-2 hover:opacity-75 ">
                        <Image
                            src={logo}
                            alt="logo clouddoc"
                            height={30}
                            width={30}
                            className="dark:hidden"
                        />
                    </Link>
                    <div className="flex flex-wrap flex-col items-start ">
                        <div className="flex items-center justify-center h-[48%] ">
                            <InputNav   
                                setLoading={setLoading}
                                setData={setData}
                                data={data}
                            />
                            <div className="relative top-[2px] ">
                                {loading?
                                    <Loader className="w-[14px] h-[14px] text-zinc-600 animate-spin"/>:
                                    <CloudCheck className="w-[14px] h-[14px] text-zinc-600"/>
                                }
                            </div>
                        </div>
                        <div className="listButton h-[48%]">
                            <Menubar className="border-none  py-0 shadow-none font-medium h-fit ">
                                <MenubarMenu >
                                    <MenubarTrigger className="px-2 py-0 font-normal cursor-pointer hover:font-medium">File</MenubarTrigger>
                                      <MenubarContent>
                                        <MenubarSub>
                                            <MenubarSubTrigger className="px-2 py-[8px] text-sm hover:bg-zinc-100 border-none outline-none rounded-[5px] flex flex-nowrap justify-between items-center">
                                                <span className="flex flex-wrap items-center"> 
                                                    <File className="size-4 mr-2"/>
                                                    Save    
                                                </span> 
                                                <ChevronRight className="w-[15px] h-[15px] text-zinc-400" />
                                            </MenubarSubTrigger>
                                            <MenubarSubContent className="shadow-lg p-2 rounded-sm bg-white w-[150px]">
                                              <MenubarItem 
                                                className="cursor-pointer"
                                                onClick={()=>{download(editor?.getJSON().content,data?.name,"application/json")}}
                                              >
                                                <FileJson className="size-4 mr2"/>
                                                JSON
                                              </MenubarItem>
                                              <MenubarItem 
                                                className="cursor-pointer"
                                                onClick={()=>{download(editor?.getHTML(),data?.name,"text/html")}}

                                              > 
                                                <GlobeIcon className="size-4 mr2"/>
                                                HTML
                                              </MenubarItem>
                                              <MenubarItem 
                                                className="cursor-pointer"
                                                onClick={()=>{downloadPdf(editor?.getText(),data?.name)}}
                                              > 
                                                <FileCheck2  className="size-4 mr2"/>
                                                PDF
                                              </MenubarItem>
                                              <MenubarItem 
                                               className="cursor-pointer"
                                               onClick={()=>{download(editor?.getText(),data?.name,"text/plain")}}
                                              > 
                                                <FileType className="size-4 mr2"/>
                                                Text
                                              </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                        <MenubarItem 
                                            className="cursor-pointer"
                                            onClick={()=>{printf()}}
                                        > 
                                            <Printer className="size-4"/>  Printf Document 
                                        </MenubarItem>
                                        <MenubarItem  className="cursor-pointer"> 
                                            <FilePlus className="size-4"/> New Document 
                                        </MenubarItem>
                                        <MenubarItem  className="cursor-pointer"> 
                                            <FilePen className="size-4"/> Rename Document
                                        </MenubarItem>
                                        <MenubarItem  className="cursor-pointer" onClick={()=>{DeleteDocument()}}> 
                                            <Trash className="size-4"/> Remove Document
                                        </MenubarItem>
                                      </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="px-2 py-0 font-normal cursor-pointer hover:font-medium">
                                        Edit
                                    </MenubarTrigger>

                                    <MenubarContent>
                                        <MenubarItem>
                                            <UndoRedoButton
                                                action="undo"
                                                className="bg-transparent hover:bg-transparent w-full h-full text-left cursor-pointer"
                                            >
                                                <Undo className="size-4 mr-2" />
                                                Undo
                                            </UndoRedoButton>
                                        </MenubarItem>
                                        
                                        <MenubarItem>
                                            <UndoRedoButton
                                                action="redo"
                                                className="bg-transparent hover:bg-transparent w-full h-full text-left cursor-pointer"
                                            >
                                                <Redo className="size-4 mr-2"/>
                                                Redo
                                            </UndoRedoButton>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="px-2 py-0 font-normal cursor-pointer hover:font-medium">
                                        Insert
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarSub>
                                            <MenubarSubTrigger className="px-2 py-[8px] text-sm hover:bg-zinc-100 border-none outline-none rounded-[5px] flex flex-nowrap justify-between items-center">
                                                <span className="flex flex-wrap items-center"> 
                                                    <Table className="size-4 mr-2"/>
                                                    Table    
                                                </span> 
                                                <ChevronRight className="w-[15px] h-[15px] text-zinc-400" />
                                            </MenubarSubTrigger>
                                            <MenubarSubContent className="shadow-lg p-2 rounded-sm bg-white w-[150px]">
                                                <MenubarItem
                                                    onClick={()=>{insertTable(1,1)}}
                                                > 
                                                    1 x 1
                                                </MenubarItem>
                                                <MenubarItem
                                                    onClick={()=>{insertTable(2,2)}}
                                                > 
                                                    2 x 2
                                                </MenubarItem>
                                                <MenubarItem
                                                    onClick={()=>{insertTable(3,3)}}
                                                > 
                                                    3 x 3
                                                </MenubarItem>
                                                <MenubarItem
                                                    onClick={()=>{insertTable(4,4)}}
                                                > 
                                                    4 x 4
                                                </MenubarItem>
                                                <MenubarItem
                                                    onClick={()=>{insertTable(5,5)}}
                                                > 
                                                    5 x 5
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSub>
                                     
                                    </MenubarContent>
                                </MenubarMenu>

                                <MenubarMenu>
                                    <MenubarTrigger className="px-2 py-0 font-normal cursor-pointer hover:font-medium">
                                        Format
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem
                                            className="cursor-pointer"
                                            onClick={() => editor?.chain().focus().toggleBold().run()}
                                        > 
                                            <Bold  className="size-4"/> Bold Text 
                                        </MenubarItem>
                                        <MenubarItem
                                            className="cursor-pointer"
                                            onClick={() => editor?.chain().focus().toggleItalic().run()}
                                        > 
                                            <Italic   className="size-4"/> Italic Text 
                                        </MenubarItem>
                                        <MenubarItem
                                            className="cursor-pointer"
                                            onClick={() => editor?.chain().focus().toggleUnderline().run()}
                                        > 
                                            <Underline   className="size-4"/> Underline Text 
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                    </div>
                </div>

                {/*section navigation notify*/}
                <div className="flex flex-wrap justify-center items-center  gap-[20px] w-fit">
                    <div className="h-[60px] flex items-center gap-[20px] justify-end px-4 border-b border-border/80 bg-background">
                      {/* <VersionsDialog editor={editor} /> */}
                      {/* <NotificationsPopover /> */}
                      {/* <Composer className="composer" /> */}
                      <CollaborativeApp />
                    </div>
                    <RoomUser />
                    <OrganizationSwitcher 
                        afterCreateOrganizationUrl="/documents"
                        afterSelectOrganizationUrl="/documents"
                        appearance={{
                            elements: {
                                rootBox: "flex justify-center",
                                organizationSwitcherTrigger: "bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2"
                            }
                        }}
                    />
                </div>
            </nav>
        </header>
    );
}
 
export default NavigationDetail;