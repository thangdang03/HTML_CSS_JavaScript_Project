import { useOrganization, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"



export const useUserId  = () =>{
    const [id,setId] = useState<string | null>(null)
    const {user,isLoaded:userLoader} = useUser();
    const {organization ,isLoaded:orgLoaded} = useOrganization();

    useEffect(()=>{
        if(!userLoader || !orgLoaded) return;
        let userId = organization?.id || user?.id || null;
        setId(userId)
    },[userLoader, orgLoaded ,  user , organization])

    return id
}