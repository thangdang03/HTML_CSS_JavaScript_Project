import logo2 from"../public/logo2.png"
const Footer = () => {
    return (  
        <footer className="centerDiv">
            <div className="nested__footer">
               <div className="footer__logo">
                    <img src={logo2} alt="logo" />
                    <p>Our vision is to make all people
                    the best place to live for them.</p>
               </div>
               <div className="footer__logo_two">
                    <div className="information">
                        <h3>information</h3>
                        <p>145 New York, FL 5467, USA</p>
                    </div>
                    <div className="footer__list">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About</span>
                    </div>
               </div>
            </div>
        </footer>
    );
}
 
export default Footer;