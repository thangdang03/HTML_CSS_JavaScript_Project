import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import logo from "../../../public/logo.png"
import banner from "../../../public/ladingImage.png"
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode";
import { Link } from "react-router";
import { Suspense, useLayoutEffect } from "react";

const LadingPage = () => {
    const {isSignedIn} = useUser();
    const handelScroll = () =>{
        if(window.scrollY === 0){
            navigation.style["border-bottom"] = "none"
        }else{
            navigation.style["border-bottom"] = "0.5px solid #525252"
        }
    }
    useLayoutEffect(()=>{
        const navigation = document.querySelector(".navigation")
        window.addEventListener("scroll",handelScroll)
        return ()=>{
            window.removeEventListener("scroll",handelScroll)
        }
    },[])
   
    return (  
        <main className="w-[100%] min-h-[100dvh] max-sm:text-[12px] max-sm:min-h-[80dvh]">
            <header className="w-[100%] h-[56px] flex justify-center items-center navigation fixed bg-white dark:bg-black">
                <nav className="w-[90%] h-[100%]  flex justify-between ">
                    <div className="flex flex-nowrap items-center">
                        <img className="w-[35px] h-[35px] dark:invert-[1]"  src={logo} alt="logo wintion" />
                        <h3 className="font-bold">Wintion</h3>
                    </div>

                    <div className="w-fit h-[100%] text-[0.9rem] flex justify-center items-center gap-[10px]">
                        <Suspense  fallback={<h1>loading...</h1>}>
                            <SignedOut>
                                <SignInButton className="cursor-pointer"/>
                            </SignedOut>
                             <SignedIn >
                               <UserButton className="cursor-pointer"/>
                             </SignedIn>
                        </Suspense>
                            {isSignedIn ?  
                                <Link to="/Page"><Button className="cursor-pointer">Join Now</Button></Link>:
                                <SignInButton className="cursor-pointer bg-black rounded-[5px] text-white px-4 py-2" >Get Wintion Free</SignInButton> 
                            }
                        <ModeToggle/>
                    </div>
                </nav>
            </header>

            <section aria-label="content" className=" w-[100%] h-[100dvh] flex justify-center items-center 
                    max-lg:h[80dvh] max-sm:h-[90dvh]">
                <div className="w-[70%] h-fit  text-center  max-lg:w-[100%] max-lg:h-[10%]">
                    <h1 className="font-bold text-[2.5rem] max-sm:text-[1.5rem]">
                            Write, plan, share.With AI at your side. <br/>
                                Welcome to <span className="underline">Winson</span>
                    </h1>
                    <p className="font-bold my-[10px] ">Winson is the connected workspace <br/> where better, faster work happens.</p>
                    
                    {isSignedIn ?  
                        <Link to="/Page"><Button className="cursor-pointer">Join Now →</Button></Link>:
                    
                        <SignInButton className="cursor-pointer bg-black font-medium rounded-[5px] text-white px-4 py-2" >Get Wintion Free →</SignInButton> 
                    }

                    <div className="flex justify-center items-center w-[100%]">
                        <img className="w-[60%] max-sm:w-[100%] dark:invert max-lg:w[100%]" src={banner} alt="banner lading page"   />
                    </div>
                </div>
            </section>

            <footer className="w-[100%] h-[56px] flex justify-center items-center">
                <div className="w-[90%] h-[100%] flex justify-between items-center">
                    <div className="flex flex-nowrap items-center">
                        <img className="w-[35px] h-[35px] dark:invert-[1] "  src={logo} alt="logo wintion" />
                        <h3 className="font-bold">Wintion</h3>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center  
                        gap-[20px] text-zinc-800 text-[0.8rem] dark:text-zinc-500 
                            ">
                        <h3>Privacy Policy</h3>
                        <h3>Term & Conditions</h3>
                    </div>
                </div>
            </footer>
        </main>
    );
}
 
export default LadingPage;