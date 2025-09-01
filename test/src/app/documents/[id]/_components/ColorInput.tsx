'use client'
import { Baseline } from "lucide-react";
import React, { useState } from "react";

const ColorInput = ({editor}:{editor:any}) => {
    const [value,setValue] = useState<string>("#000000")

    //get color text
    let color = editor?.getAttributes('textStyle').color 
    if(!color) return;    

    // function get color value when user change input color
    const getValue = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    //function set color for text when user blur
    const changeColor = (e : React.ChangeEvent<HTMLInputElement>):void =>{
        editor?.chain().focus().setColor(value).run()
    }

    return (  
        <div className=""> 
            <label htmlFor="inputColor" className=" flex flex-wrap w-[20px] h-fit flex-col items-center justify-center gap-0">
                <Baseline
                    className="w-[17px] h-[17px] cursor-pointer "
                    style={{color: color}}
                />
                <input
                  id="inputColor"
                  type="color"
                  value={color}
                  onChange={getValue}
                  onBlur={changeColor}
                  data-testid="setColor"
                  className="h-0 w-0  focus:outline-none border-none "
                />
            </label>
        </div>
    );
}
 
export default ColorInput;