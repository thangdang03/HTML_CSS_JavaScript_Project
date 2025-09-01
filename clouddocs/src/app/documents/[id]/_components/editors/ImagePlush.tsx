import {  ImagePlusIcon } from "lucide-react";

const ImagePlus = ({editor}:{editor:any}) => {
    const OpenImageUpload = ():void =>{
        editor
        .chain()
        .focus()
        .setImageUploadNode()
        .run()
    }

    return (  
        <div>
            <ImagePlusIcon 
                onClick={()=>(OpenImageUpload())}
                className="w-[15px] h-[15px] cursor-pointer"
            />
        </div>
    );
}
 
export default ImagePlus;