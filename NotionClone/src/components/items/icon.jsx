import { updatePage2 } from "@/utils/superbase.client";
import EmojiPicker from "emoji-picker-react";
import { SmilePlus } from "lucide-react";
import { useState } from "react";

const IconPicker = ({setData,data}) => {
    const [open,setOpen] = useState(false)

    const changeIcon = async (emojiObject) =>{
        console.log(data)
        const result = await updatePage2(data.id,{icon: emojiObject.emoji});
        setData(result[0])
        setOpen(false)
    }
    return (  
        <div className="relative">
            <button onClick={()=>{setOpen(!open?true:false)}} className="rounded-sm text-[14px] p-[10px] flex justify-center items-center gap-[10px] cursor-pointer font-medium  text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all duration-100 ">
               <SmilePlus className="w-[15px] h-[15px]"/> Add icon
            </button> 
            <EmojiPicker
                open={open}
                onEmojiClick={changeIcon}
                width="400px"
                height="400px"
                className="!absolute !z-99"
                style={{position: "absolute !important"}}
            />

        </div>
    );
}
 
export default IconPicker;