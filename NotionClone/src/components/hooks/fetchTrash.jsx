import { getDataById2 } from "@/utils/superbase.client"
import { useState, useEffect }  from "react"

const useFetch =  (id) =>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    
    useEffect(()=>{
        if(!id) return ;
        setLoading(true)
        setError(null)

        getDataById2(id).then(data => data[0])
        .then(data=>{
            setData(data)
        })
        .catch(error=>{
            setError(error.message)
        }).finally(()=>{
            setLoading(false)
        })
    },[id])
    return {loading,data,error}
}

export default useFetch