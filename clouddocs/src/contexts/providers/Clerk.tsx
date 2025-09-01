'use client'
import { ClerkProvider } from "@clerk/nextjs";
const ProviderClerk = ({children}:{children: React.ReactNode}) => {
    return (  
        <ClerkProvider 
          afterSignOutUrl="/"
        >
          {children}
        </ClerkProvider>
    );
}
 
export default ProviderClerk;