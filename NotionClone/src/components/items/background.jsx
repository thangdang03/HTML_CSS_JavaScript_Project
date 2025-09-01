import { Image } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {  useEffect, useState } from "react";
import Loading from "./loadding";
import { updatePage2 } from "@/utils/superbase.client";

const Background = ({data,setData,open,setOpen}) => {
    const [loading,setLoading] = useState(false)
    const uploadFile = async (e) =>{
      setLoading(true)
      const file = e.target.files[0]
      const dataForm = new FormData()
      dataForm.append("file",file)
      dataForm.append("cloud_name","dhtkxfjd8")
      dataForm.append("upload_preset","wintion_uppload")
      const result = await fetch("https://api.cloudinary.com/v1_1/dhtkxfjd8/upload",{
        method: "POST",
        body: dataForm
      })
      const res  = await result.json()
      // update dbs
      const resultData = await updatePage2(data.id,{background: res.url})
      //set data
      setData(resultData[0])
      setLoading(false)
      setOpen(false)
    }
    return (  
        <Dialog open={open} onOpenChange={setOpen}>
          {!data.background &&
            <DialogTrigger asChild>
               <button  className="rounded-sm text-[14px] p-[10px] flex justify-center items-center gap-[10px] cursor-pointer font-medium  text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all duration-100 ">
                 <Image  className="w-[15px] h-[15px]"/> Add cover
              </button> 
            </DialogTrigger>
          }
          
          {loading?
            <DialogContent className="sm:max-w-[425px] min-h-[300px] flex justify-center items-center flex-wrap ">
                <Loading/>
            </DialogContent>:
            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader >
                  <DialogTitle className="text-center">Cover Image</DialogTitle>
                </DialogHeader>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" onChange={(e)=>{uploadFile(e)}} />
                    </label>
                </div> 
            </DialogContent>
          }
        </Dialog>
    );
}
 
export default Background;