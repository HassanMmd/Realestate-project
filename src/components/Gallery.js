import { useSelector } from "react-redux";
import "./Gallery.css"
import { Link} from "react-router-dom";

function Gallery() {
    const info = useSelector(state => state.info.info);
    const isLogged = useSelector(state => state.auth.auth);
    return (
        <div className="gallery">
            {isLogged && <div>
            <h2>Gallery</h2>
            {info.length !== 0 && <div className="pics">
                {info.urls.map((e) => {
                    return (
                        <div className="img-container">
                            <img src={e} class="d-block w-100" width="100px" alt="..."></img>
                        </div>
                    )
                })}
            </div>}
            {info.length !== 0 && <div className="personal-info">
                <p className="card-title">Name: {info.name} | Phone: {info.phone}</p>
                <p className="card-subtitle mb-2">Email: {info.email}</p>
            </div>}
            <Link to={"/GetRealestate"} className="btn btn-danger back">Back To List</Link>
            </div>}
            {!isLogged && <Link to={"/Login"} className="btn btn-danger back">Back To Login</Link>}
        </div>
    )
}

export default Gallery;