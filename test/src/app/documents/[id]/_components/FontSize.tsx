'use clients'
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const FontSize = ({editor}:{editor: any}) => {
    const [value,setValue] = useState<string>("")
    const [editing,setEditing] = useState<boolean>(false)
    
    let size = editor?.getAttributes('textStyle').fontSize?
    editor?.getAttributes('textStyle').fontSize:
    "16"
 

    const decrement = ():void =>{
        let newSize = parseInt(size) - 1
        console.log(newSize)
        if(!isNaN(newSize) && size > 0){
            editor?.chain().focus().setFontSize(newSize).run()
        }
    }

    const increment = ():void =>{
        let newSize = parseInt(size) + 1
        console.log(newSize)
        if(!isNaN(newSize) && size > 0){
            editor?.chain().focus().setFontSize(newSize).run()
        }
    }

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>):void =>{
        let newValue : number = parseInt(value)
        if(!isNaN(newValue) && newValue >= 0 ){
            editor?.chain().focus().setFontSize(value).run()
        }
        setEditing(false);
    }

    const getValue = (e : React.ChangeEvent<HTMLInputElement>):void =>{
        setValue(e.target.value);
    } 

    // change button to input
    const btnHandel = ():void =>{
        setValue(size);
        setEditing(true)
    }
    return (  
        <div className="w-[80px] flex flex-nowrap justify-between items-center ">
            <Minus 
                className="w-[18px] h-[18px] hover:text-black cursor-pointer"
                onClick={()=>{
                    decrement()
                }}
            />
            {
                !editing?
                <button
                    onClick={()=>{
                        btnHandel()
                    }}
                    className="w-[50%] text-black px-1 border-[2px]  cursor-pointer rounded-sm"
                >
                    {size}
                </button>:
                <input 
                    type="text" 
                    className="w-[50%] text-black px-1 border-[2px]  cursor-pointer rounded-sm"
                    onChange={getValue}
                    onBlur={changeHandle}
                    value={value}
                />
            }
          
            <Plus 
                className="w-[18px] h-[18px] hover:text-black cursor-pointer"
                onClick={()=>{
                    increment()
                }}
            />
        </div>
    );
}
 
export default FontSize;