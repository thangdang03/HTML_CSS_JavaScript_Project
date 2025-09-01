import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "document detail",
    description: "document detail"
}

const DocumentDetail = ({children}:{children: ReactNode}) => {
    return (  
        <html lang="en">
            <body >
                {children}
            </body>
        </html>
    );
}
 
export default DocumentDetail;