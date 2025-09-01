import { Loader } from "lucide-react";

const Loading = () => {
    return (  
        <div className="w-ful h-[100dvh] flex items-center justify-center bg-zinc-100">
            <Loader className="w-[20px] h-[20px] animate-spin text-zinc-500 " />
        </div>
    );
}
 
export default Loading;