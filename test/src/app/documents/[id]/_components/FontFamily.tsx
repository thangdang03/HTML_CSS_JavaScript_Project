'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown, ChevronLeft } from "lucide-react"
import { useState } from "react"

const FontFamilyButton = ({editor}:{editor:any}) => {
    const [open, setOpen] = useState<boolean>(false)
    
    const fonts = editor?.getAttributes('textStyle').fontFamily
    
    // function config class by fonts 
    const setClassName = (font:string):string =>{
      let className : string = `font-[${font}]  rounded-ld w-full text-start px-1 text-nowrap overflow-hidden 
      text-ellipsis hover:bg-zinc-200 cursor-pointer`
      if(editor?.isActive('textStyle', { fontFamily: font})){
        className += "is-active"
      }
      return className
    }

    return (  
       <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="flex px-1 justify-between items-center text-[13px]  w-[150px]  hover:text-black hover:cursor-pointer" >
            <span className="w-[90%] text-start overflow-hidden text-ellipsis text-nowrap">
              {!fonts ?
                "Fonts":
                fonts
              }
            </span>
            {open ?
                <ChevronDown
                    className="w-[15px] h-[15px] text-zinc-400"
                /> 
                :
                <ChevronLeft 
                    className="w-[15px] h-[15px] text-zinc-400"
                />
            }
          </PopoverTrigger>
          <PopoverContent side="bottom" align="start" className="w-[150px] p-3">
            <div className="button-group flex flex-col gap-2 items-start  w-full">
              <button
                onClick={() => editor?.chain().focus().setFontFamily('Inter').run()}
                className={setClassName("Inter")}
                data-test-id="inter"
              >
                Inter
              </button>
              <button
                onClick={() => editor?.chain().focus().setFontFamily('"Comic Sans MS", "Comic Sans"').run()}
                className={setClassName("Comic Sans MS")}
                data-test-id="comic-sans"
              >
                Comic Sans
              </button>
              <button
                onClick={() => editor?.chain().focus().setFontFamily('serif').run()}
                className={setClassName("serif")}
                data-test-id="serif"
              >
                Serif
              </button>
              <button
                onClick={() => editor?.chain().focus().setFontFamily('monospace').run()}
                className={setClassName("monospace")}
                data-test-id="monospace"
              >
                Monospace
              </button>
              <button
                onClick={() => editor?.chain().focus().setFontFamily('cursive').run()}
                className={setClassName("cursive")}
                data-test-id="cursive"
              >
                Cursive
              </button>
              
              <button
                onClick={() => editor?.chain().focus().setFontFamily('"Exo 2"').run()}
                className={setClassName("exo2")}
                data-test-id="exo2"
              >
                Exo 2
              </button>
              <button 
                onClick={() => editor?.chain().focus().unsetFontFamily().run()}
                data-test-id="unsetFontFamily"
                className={setClassName("")}
              >
                Unset font family
              </button>
            </div>
          </PopoverContent>

       </Popover>
    );
}
 
export default FontFamilyButton;