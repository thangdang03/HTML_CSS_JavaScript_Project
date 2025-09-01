'use client'
import { useParams } from "next/navigation";
import Editor from "./_components/editors/Editor";
import '@/styles/customEditor.scss'
import '@/components/tiptap-ui-primitive/dropdown-menu/dropdown-menu.scss'
import { Room } from "@/contexts/providers/LiveBlock";
import "@liveblocks/react-ui/styles.css";
import { useEffect, useState } from "react";
import { useSupabase } from "@/lib/supabase";
import Permission from "./_components/Permision";
import Loading from "@/components/Loading";


const DetailDocumentPage = () => {
    const {id} = useParams();
   
    const publicApiKey = process.env.NEXT_PUBLIC_LIVEBLOCK_KEY!;
    if(!id || !publicApiKey || Array.isArray(id)) throw new Error("Server is error");

    const [data,setData] = useState<any>()
    const [loading,setLoading]= useState<boolean>(false)
    const getData = async () => {
      try {
          if(!id)return;
          setLoading(true)
          console.log(id)
          const newData = await useSupabase().getDocumentById(id);
          console.log(newData)
          setData(newData)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
          setData(null)
      }
    }
    useEffect(()=>{
      getData()
    },[id])
    if(loading) return <Loading/>
    
    if(!data) return <Permission />
    return (  
      <Room 
        RoomId={id}
        keyPublicLiveBlog={publicApiKey}
      >
        <main>
          <section className="w-full flex flex-wrap" aria-label="editor section">
            <Editor />
          </section>
        </main>
      </Room>
    );
}
 
export default DetailDocumentPage;