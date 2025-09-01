import { Search } from "lucide-react";

const InputSearchCommand = ({setDataList}:{setDataList: any}) => {
    return (  
        <div className="flex flex-nowrap gap-10px">
            <Search className="size-3" />
            <input 
                type="text"

            />

        </div>
    );
}
 
export default InputSearchCommand;