import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const ButtonSingIn = () => {
    return (  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn >
              <UserButton />
            </SignedIn>
        </div>
    );
}
 
export default ButtonSingIn;