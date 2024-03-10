import AddRealestate from "./AddRealestate";
import Gallery from "./Gallery";
import GetRealestate from "./GetRealestate";
import Login from "./Login";
import "./Main.css"
import { Route, Routes } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/*" element={<Login />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/AddRealestate" element={<AddRealestate />}></Route>
                <Route path="/GetRealestate" element={<GetRealestate />}></Route>
                <Route path="/Gallery" element={<Gallery />}></Route>
            </Routes>
        </div>
    );
}

export default Main;