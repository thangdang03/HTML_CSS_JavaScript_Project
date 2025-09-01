import { debounce } from "@/utils/debounce"
import { updatePage } from "@/utils/superbase.client"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"
import { useCallback, useEffect, useRef } from "react"

const Note = ({data,setData}) => {
    const uploadFile = async (file) =>{
      const dataForm = new FormData()
      dataForm.append("file",file)
      dataForm.append("cloud_name","dhtkxfjd8")
      dataForm.append("upload_preset","wintion_uppload")
      const result = await fetch("https://api.cloudinary.com/v1_1/dhtkxfjd8/upload",{
        method: "POST",
        body: dataForm
      })
      const res  = await result.json()
      return res.url
    }
    const editor = useCreateBlockNote({
      uploadFile: uploadFile
    })
   
    const setContext = async () =>{
      const contentInput =  await JSON.stringify(editor.topLevelBlocks);
      const result = await updatePage(data.id,{content: contentInput});
      setData(result[0]);
    }

    const debouncedChangeContent = useCallback(debounce(setContext, 5000), [editor.document]);
    const isProcessing = useRef(false);
    useEffect(()=>{
      if(!data.content) return;
      const value = JSON.parse(data.content)
      editor.replaceBlocks(editor.topLevelBlocks, value);
    },[editor,data.content])
    return (  
        <>
            <BlockNoteView  style={{padding: 0}}  editor={editor} theme={"light"} onChange={()=>{debouncedChangeContent()}}  />
        </>
    );
}
 
export default Note;