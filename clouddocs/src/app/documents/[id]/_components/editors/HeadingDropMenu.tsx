'use client'
import { HeadingButton } from "@/components/tiptap-ui/heading-button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown, ChevronLeft } from "lucide-react"
import { useState } from "react"

const HeadingDropMenu = ({editor}:{editor:any}) => {
    const [open,setOpen] = useState<boolean>(false)
    const heading = editor?.getAttributes("heading")

    // function set Heading level for text
    const setHeading = (levels : number):void =>{
        editor?.chain().focus().setHeading(levels).run()
    }

    return (  
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="hover:text-black cursor-pointer ">
                <div
                    className="flex flex-nowrap text-[13px] items-center justify-between w-[40px]"
                >
                    {!heading ?
                        <span>H</span>:
                        <span>H{heading?.level}</span>
                    }
                    {open ?
                        <ChevronDown
                            className="w-[15px] h-[15px] text-zinc-400"
                        /> 
                        :
                        <ChevronLeft 
                            className="w-[15px] h-[15px] text-zinc-400"
                        />
                    }
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[125px] p-2" side="bottom" align="start">
                <div className="button-group flex flex-col gap-2 items-start  w-full">
                    <HeadingButton 
                        level={1}
                        className="hover:bg-zinc-200 px-2 rounded-sm cursor-pointer w-full"
                        onClick={()=>{
                            setHeading(1)
                        }}
                    >
                        Heading 1
                    </HeadingButton >
                    <HeadingButton 
                        level={2}
                        className="hover:bg-zinc-200 px-2 rounded-sm cursor-pointer w-full"
                        onClick={()=>{
                            setHeading(2)
                        }}
                    >
                        Heading 2
                    </HeadingButton >
                    <HeadingButton 
                        level={3}
                        className="hover:bg-zinc-200 px-2 rounded-sm cursor-pointer w-full"
                        onClick={()=>{
                            setHeading(3)
                        }}
                    >
                        Heading 3
                    </HeadingButton >
                    <HeadingButton 
                        level={4}
                        className="hover:bg-zinc-200 px-2 rounded-sm cursor-pointer w-full"
                        onClick={()=>{
                            setHeading(4)
                        }}
                    >
                        Heading 4
                    </HeadingButton >
                </div>
            </PopoverContent>
        </Popover>
    );
}
 
export default HeadingDropMenu;