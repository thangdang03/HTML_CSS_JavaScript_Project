import { Metadata } from "next";
import React from "react";

const metadata : Metadata = {
    title: "CloudDocs",  
    description: "CloudDocs - Your personal document management system",
    keywords: ["cloud", "docs", "nextjs", "clerk", "authentication"]
}   

const DocumentLayout = ({
    children
}:Readonly<{
  children: React.ReactNode;
}>) => {
    return (  
        <main>
            {children}
        </main>
    );
}
 
export default DocumentLayout;