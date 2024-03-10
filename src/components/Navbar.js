import { Link } from "react-router-dom";
import "./Navbar.css"
import Logo from "../assets/logo-realestate.png"

function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary fixed-top header">
                <div class="container-fluid header">
                    <img className="logo" src={Logo} alt="logo"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header header-canavas-title">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Real Estate</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body header-canavas">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ul-nav">
                                <li class="nav-item">
                                    <Link to="/AddRealestate" className="nav-item add-nav">Add Realestate</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/GetRealestate" className="nav-item list-nav">Realestates List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="nav-list">
                <Link to="/AddRealestate" className="nav-item add-nav">Add Realestate</Link>
                <Link to="/GetRealestate" className="nav-item list-nav">Realestates List</Link>
            </nav>
            <hr className="line" />
        </div>
    );
}

export default Navbar;