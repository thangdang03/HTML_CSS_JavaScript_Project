import { TextQuote } from "lucide-react";

const Quote = ({editor}:{editor:any}) => {
    
    return (  
        <button
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            className={editor?.isActive('blockquote') ? ' cursor-pointer ' : 'cursor-pointer'}
        >
            <TextQuote 
                className="w-[15px] h-[15px]"
            />
        </button>
    );
}
 
export default Quote;