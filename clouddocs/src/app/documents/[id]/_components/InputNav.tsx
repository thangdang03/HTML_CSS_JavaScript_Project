'use client'
import { useDebounce } from "@/hooks/useDebouce";
import { useUserId } from "@/hooks/useUserId";
import { useSupabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

const InputNav = ({
        setLoading,
        setData ,
        data
        }:
        {
        setLoading:  Dispatch<SetStateAction<boolean>> , 
        setData: Dispatch<any>,
        data: any
    }) => {
    const {id} = useParams();
    const updateName  =async () =>{
        try {
            if(!id) return;
            setLoading(true)
            const newData = await useSupabase().updateDocument(id.toString(),{name: data?.name});
            setData(newData)
            setLoading(false)
        } catch (error) {
            console.log(error);
            throw new Error("is fetching data error");
        }
    }
    const debounceValue = useDebounce(data?.name,1000)

    useEffect(()=>{
        updateName()
    },[debounceValue])

    return (  
        <>
        <input 
            type="text" 
            value={data?.name}
            onChange={(e)=>{setData((perv:any) =>({...perv,name: e.target.value}))}}
            className="text-[19px] focus:outline-none border-none  px-2 max-w-[300px] overflow-x-hidden text-ellipsis  "
        />
        </>
    );
}
 
export default InputNav;