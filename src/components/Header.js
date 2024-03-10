import Logo from "../assets/logo-realestate.png"
import "./Header.css"
import Navbar from "./Navbar";

function Header() {
    return (
        <header id="home">
            <div className="logo-nav">
                <img className="logo" src={Logo} alt="logo"></img>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;