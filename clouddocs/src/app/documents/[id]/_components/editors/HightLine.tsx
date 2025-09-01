'use client'
import { CircleX, Highlighter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import React, { useState } from "react";

const HightLine = ({editor}:{editor:any}) => {
    const [open,setOpen] = useState<boolean>(false)
    const [value,setValue] = useState<string>("#000000")

    // function set hight line for text
    const setHightLine = (color : string):void =>{
        editor.chain().focus().toggleHighlight({ color: color }).run()
        setOpen(false)
    }

    // function set custom line color text
    const setCustomHightLine = (e : React.FocusEvent<HTMLInputElement, Element>):void =>{
        editor.chain().focus().toggleHighlight({ color: e.target.value }).run()
        setOpen(false)
    } 

    // function unset hight line color text
    const unSetHightLine = ():void =>{
        editor.chain().focus().unsetHighlight().run()
        setOpen(false)
    }
    return (  
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Highlighter 
                    className="w-[15px] h-[15px] cursor-pointer "
                />
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-nowrap gap-2 items-center justify-center">
                    <button
                        className="w-[25px] h-[25px] rounded-[50%] bg-red-500 border-solid border-[3px] border-zinc-300 cursor-pointer hover:scale-[1.1]"
                        onClick={()=>{setHightLine("#fb2c36")}}
                    >
                    </button>
                    <button
                        className="w-[25px] h-[25px] rounded-[50%] bg-purple-500 border-solid border-[3px] border-zinc-300 cursor-pointer hover:scale-[1.1]"
                        onClick={()=>{setHightLine("#ad46ff")}}

                    >
                    </button>
                    <button
                        className="w-[25px] h-[25px] rounded-[50%] bg-green-500 border-solid border-[3px] border-zinc-300 cursor-pointer hover:scale-[1.1]"
                        onClick={()=>{setHightLine("#00c950")}}

                    >
                    </button>
                    <button
                        className="w-[25px] h-[25px] rounded-[50%] bg-blue-500 border-solid border-[3px] border-zinc-300 cursor-pointer hover:scale-[1.1]"
                        onClick={()=>{setHightLine("#2b7fff")}}

                    >
                    </button>
                    <button
                        className="w-[25px] h-[25px] rounded-[50%] bg-pink-500 border-solid border-[3px] border-zinc-300 cursor-pointer hover:scale-[1.1]"
                        onClick={()=>{setHightLine("#f6339a")}}

                    >
                    </button>
                    <label 
                        htmlFor="inputHightLine" 
                        className="w-[25px] h-[25px] rounded-[100%] cursor-pointer group
                        border-solid border-[3px] relative border-zinc-300 hover:scale-[1.1]" 
                        style={{backgroundColor: value}}>
                        <input 
                            type="color" 
                            id="inputHightLine"
                            onBlur={setCustomHightLine}
                            className="  w-0 h-0"
                        />
                        <div className="hidden group-hover:block absolute top-[30px] left-[-25px]  text-[12px] font-medium text-nowrap shadow-xl bg-white p-2">
                            Custom color
                        </div>
                    </label>
                    
                    
                    <div className="relative group">
                        <CircleX
                            className="w-[28px] h-[28px] text-zinc-500 hover:scale-[1.1] cursor-pointer"
                            onClick={()=>{unSetHightLine()}}
                        />  
                        <div className="hidden group-hover:block absolute top-[35px] left-[-25px]  text-[12px] font-medium text-nowrap shadow-xl bg-white p-2">
                            Remove Color
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
 
export default HightLine;