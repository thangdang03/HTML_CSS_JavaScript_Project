'use client';
import Loading from "@/components/Loading";
import {  useUser } from "@clerk/nextjs";
import BackToHome from "@Documents/_components/BackToHome";
import NavDocument from "@Documents/_components/NavDocument";
import Template from "@Documents/_components/Template";
import ListDocuments from "@Documents/_components/ListDocument";
import { Toaster } from "sonner";

const DocumentPage = () => {
    const {user,isLoaded} = useUser();

    if(!isLoaded) return (
        <Loading />
    )

    if(!user) return(<BackToHome />);

    return (  
        <div className="">
           {/*navigation section*/}
           <NavDocument />

        {/* Template Section */}
        <Template />
        {/*ListDocuments */}
        <ListDocuments/>
        <Toaster />

        </div>
    );
}
 
export default DocumentPage;