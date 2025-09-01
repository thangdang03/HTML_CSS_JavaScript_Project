import { useEffect } from "react";
import { useParams } from "react-router";
import imageBanner from"../../../public/nc-no-answer.png"
import { Button } from "../ui/button";
import useFetch from "../hooks/fetch";
import Loading from "../items/loadding";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

const Share = () => {
    const {id} = useParams()
    const {data,loading,error} = useFetch(id)
    const editor = useCreateBlockNote()
    useEffect(()=>{
        if(!data) return;
        const value = JSON.parse(data.content)
        editor.replaceBlocks(editor.topLevelBlocks, value);
    },[data])

    if(loading) return(
        <div className="w-[100%] h-[100dvh] flex justify-center items-center"><Loading/></div>
    )
    if(error) return(<Error/>)
    return (  
        <div>
        {!data?.is_public ?
            <div className="w-[100%] h-[100dvh] flex flex-col justify-center items-center gap-[20px] ">
                <img className="w-[15%] " src={imageBanner} alt="something wrong" />
                <h2 className="text-[20px] font-bold">Something went Wrong</h2>
                <Button>
                    <a href="/"> Go Home</a>
                </Button>
            </div>:
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-[100%] h-[250px]">
                    {data.background &&
                        <img loading="lazy" src={data.background} alt="background page" className="w-[100%] h-[100%] object-cover object-center" />
                    }
                </div>
                <div className="mb-[300px] w-[70%]">
                    <h3 className="text-[50px]">{data.icon}</h3>
                    <h1 className="text-[50px] font-bold">{data.name}</h1>
                    <BlockNoteView  style={{padding: 0}}  editor={editor} theme={"light"} editable={false} />
                </div>
            </div>
        }
        </div>

    );
}
 
export default Share;