import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { ModeToggle } from "../ui/mode";

const Setting = ({openSetting,setOpenSetting}) => {
    return (  
        <Dialog open={openSetting} onOpenChange={setOpenSetting}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="p-[20px 0px] h-[40px] text-[20px] border-b-[1px] border-solid">My settings</DialogTitle>
              <DialogDescription className="flex justify-between items-center">
                <div>
                    <span className="font-bold text-black" >Appearance</span> <br />
                    Customize how Jotion looks on your device
                </div>
                <ModeToggle/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    );
}
 
export default Setting;