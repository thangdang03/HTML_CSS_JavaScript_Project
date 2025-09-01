import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

const MarkButton = ({editor}:{editor:any}) => {
    
    // function config class name
    const conFigClassname = (mark:string):string =>{
      let className = "w-[15px] h-[15px] cursor-pointer"
      if(editor?.isActive(mark)){
        className += " text-[#3a06ff] bg-transparent "
      }
      console.log(className)
      return className
    }

    return (  
        <>
            <button
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className="!bg-transparent"
            >
                <BoldIcon
                    className={conFigClassname("bold")}
                />
            </button>

            <button
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className="bg-transparent"
            >
                <ItalicIcon 
                    className="text-[#3a06ff]"
                />
            </button>

            <button
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              className="bg-transparent"
            >
              <UnderlineIcon
                className={conFigClassname("underline")}
              />
            </button>
        </>
    );
}
 
export default MarkButton;