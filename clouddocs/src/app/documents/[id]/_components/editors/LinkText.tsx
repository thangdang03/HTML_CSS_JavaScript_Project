import { LinkIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from "react";

const LinkText = ({editor}:{editor:any}) => {
    const url = editor?.isActive('link');
    const [valueLink,setValueLink] = useState<string>("")
    const [open,setOpen] = useState<boolean>(false)

    // function get value input
    const getValueInput = (e : React.ChangeEvent<HTMLInputElement> ) =>{
        setValueLink(e.target.value)
    }

    // function set Link to text
    const setLink = (e :  React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: valueLink })
        .run()
        setValueLink("")
        setOpen(false)
    }

    const unSetLink = () =>{
        if(!url) return;
        editor
        .chain()
        .focus()
        .unsetLink()
        .run()
    }

    return (  
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger onClick={()=>{unSetLink()}} >
                <LinkIcon 
                    className="w-[15px] h-[15px] cursor-pointer "
                />
            </PopoverTrigger>
            {!url &&
                <PopoverContent>
                    <form className="flex flex-wrap justify-end gap-[20px]" onSubmit={setLink}>
                        <input 
                            autoComplete="off"
                            pattern="https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(/.*)?"
                            title="Please enter a valid URL starting with http:// or https://"
                            placeholder="Enter a valid URL (e.g., https://example.com)"
                            type="url"
                            className="w-full p-1"
                            value={valueLink}
                            onChange={getValueInput}
                        />
                        <button
                            type="submit"
                            className="px-2 py-1 bg-black text-white rounded-sm text-[12px] cursor-pointer"
                        >
                            save
                        </button>
                    </form>
                </PopoverContent>
            }
        </Popover>
    );
}
 
export default LinkText;