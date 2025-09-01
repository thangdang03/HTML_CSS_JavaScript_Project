import { Loader } from "lucide-react";

const Loading = () => {
    return (  
        <div className="w-100% h-[100dvh] flex justify-center items-center">
            <Loader 
                className="w-[20px] h-[20px] text-zinc-400 animate-spin"
            />
        </div>
    );
}
 
export default Loading;