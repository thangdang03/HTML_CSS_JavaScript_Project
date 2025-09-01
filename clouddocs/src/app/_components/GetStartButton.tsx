'use client'

import { SignInButton, useUser} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

const GetStartButton = () => {
    const {user} = useUser();
    
    if(user === undefined) return (
        <div className="px-8 py-3 flex  justify-center items-center">
            <Loader
                className="text-zinc-400 animate-spin"
            />
        </div>
    )

    return ( 
        <>
        {user === null ?
            <div className="cursor-pointer px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-300">
                <SignInButton >
                    Get Started
                </SignInButton>
            </div>
            :
            <Link 
                href="/documents"
                className="cursor-pointer px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
                join now
            </Link>
        }
        </> 
    );
}
 
export default GetStartButton;