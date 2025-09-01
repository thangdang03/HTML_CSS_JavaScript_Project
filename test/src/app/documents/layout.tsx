import { ReactNode } from "react";

const DocumentLayout = ({children}:{children: ReactNode}) => {
    return (  
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
 
export default DocumentLayout;