import logo from "../public/logo.png";

const Header = () => {
    window.onload = () =>{
        const navigation = document.querySelector("header")
        window.addEventListener("scroll", (event) => { 
            if(window.scrollY >= 1  ){
                navigation.style.background = "rgb(48, 46, 46)"
                navigation.style["z-index"] = "99"
            }else if(window.scrollY == 0 ){
                navigation.style["z-index"] = "0"
                navigation.style.background = "var(--black)"
            }
        })
    }

    return ( 
        <header className="centerDiv"> 
            <nav>
                <ul>
                    <li className="logo">
                        <a href="#Hero" >
                            <img src={logo} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href="#Residencies" >Residencies</a>
                    </li>
                    <li>
                        <a href="#Value" >Our Value</a>
                    </li>
                    <li>
                        <a href="#Contact" >Contact Us</a>
                    </li>
                    <li>
                        <a href="#Start" >Get Started</a>
                    </li>
                    <li>
                        <a href="#" className="contactBtn">Contact</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;