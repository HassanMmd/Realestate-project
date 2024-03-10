import React from "react";
import "./Card.css"
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInfo } from "../features/infoSlice";

function Card(props) {
    function handleOpen() {
        addInfoRedux(props.realestate)
    }
    const dispatch = useDispatch();
    function addInfoRedux(data) {
        dispatch(addInfo(data));
    }
    return (
        <div className="container-card">
            <div className="card card-background text-white mb-3">
                <div className="card-body">
                    <div className="personal-info">
                        <img src={props.realestate.urls[0]} width="250px" height="150px" alt="Img"></img>
                        <div className="personal-info">
                            <p className="card-title">Name: {props.realestate.name} | Phone: {props.realestate.phone}</p>
                            <p className="card-subtitle mb-2">Email: {props.realestate.email}</p>
                        </div>
                    </div>
                    <div className="col-details">
                        <h5 className="details-title">Location</h5>
                        <h6 className="card-text details-content">{props.realestate.location}</h6>
                        <h5 className="details-title">Area</h5>
                        <h6 className="card-text details-content">{props.realestate.area}</h6>
                        <h5 className="details-title">Status</h5>
                        <h6 className="card-text details-content">{props.realestate.status}</h6>
                    </div>
                    <div className="col-details">
                        <h5 className="details-title">Rooms</h5>
                        <h6 className="card-text details-content">{props.realestate.rooms}</h6>
                        <h5 className="details-title">For</h5>
                        <h6 className="card-text details-content">{props.realestate.rentOrSell}</h6>
                        <h5 className="details-title">Description</h5>
                        <h6 className="card-text desc details-content">{props.realestate.descreption}</h6>
                    </div>
                    <div className="show-price">
                        <div className="price">
                            <h5>Price</h5>
                            <div className="card-text">{props.realestate.price}</div>
                        </div>
                        <Link to="/Gallery" className="nav-item btn btn-danger showmore" onClick={handleOpen}>Show Photos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;