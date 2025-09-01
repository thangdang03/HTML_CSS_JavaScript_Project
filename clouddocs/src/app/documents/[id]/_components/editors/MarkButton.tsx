import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

const MarkButton = ({editor}:{editor:any}) => {
    
    return (  
        <>
            <button
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive('bold') ? 'bg-zinc-200 rounded-sm ' : 'bg-transparent rounded-sm '}
            >
                <BoldIcon
                    className="w-[15px] h-[15px] cursor-pointer "
                />
            </button>

            <button
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive('italic') ? 'bg-zinc-200 rounded-sm ' : 'bg-transparent rounded-sm '}
            >
                <ItalicIcon 
                    className="w-[15px] h-[15px] cursor-pointer"
                />
            </button>

            <button
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              className={editor?.isActive('underline') ? 'bg-zinc-200 rounded-sm ' : 'bg-transparent rounded-sm '}
            >
              <UnderlineIcon
                className="w-[15px] h-[15px] cursor-pointer"
              />
            </button>
        </>
    );
}
 
export default MarkButton;