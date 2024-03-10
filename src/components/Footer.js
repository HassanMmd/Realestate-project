import Logo from "../assets/logo-realestate.png"
import "./Footer.css"

function Footer(){
    return(
        <footer className="container-footer">
            <img className="logo-footer" src={Logo} alt="logo"></img>
            <div>CopyRight&copy;</div>
        </footer>
    );
}

export default Footer;