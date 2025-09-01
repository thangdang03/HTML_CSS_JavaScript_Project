import { TextAlignButton } from "@/components/tiptap-ui/text-align-button";

const TextAlignButtons = () => {
    return (  
        <div className="flex flex-wrap">
            <TextAlignButton align="left" className="cursor-pointer"/>
            <TextAlignButton align="center" className="cursor-pointer" />
            <TextAlignButton align="right" className="cursor-pointer" />
            <TextAlignButton align="justify" className="cursor-pointer" />
        </div>
    );
}
 
export default TextAlignButtons;