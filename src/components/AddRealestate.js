import "./AddRealestate.css"
import {
    ref,
    uploadBytes,
    getDownloadURL,
    getStorage,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddRealestate() {
    const inputRef = useRef(null);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [area, setArea] = React.useState("");
    const [rentOrSell, setRentOrSell] = React.useState("Rent");
    const [price, setPrice] = React.useState("");
    const [status, setStatus] = React.useState("Furnished");
    const [rooms, setRooms] = React.useState("");
    const [descreption, setDescreption] = React.useState("");
    const [images, setImages] = React.useState([]);
    const [urls, setUrls] = React.useState([]);
    const [imageUpload, setImageUpload] = React.useState(null);
    const [imageUrls, setImageUrls] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [signEmail, setSinEmail] = React.useState("admin@admin.com");
    const [password, setPassword] = React.useState("admin.1");
    const firebaseConfig = {
        apiKey: "AIzaSyBAb1Yv-NA1dRYPoLa0qBGFyryqfVy2F6A",
        authDomain: "realestate-2fe23.firebaseapp.com",
        projectId: "realestate-2fe23",
        storageBucket: "realestate-2fe23.appspot.com",
        messagingSenderId: "136227152488",
        appId: "1:136227152488:web:242f9bf492fbba378691dd"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage();
    const isLogged = useSelector(state=>state.auth.auth);
    const uploadFile = async (e) => {
        e.preventDefault();
        if (images == null) return;
        images.map((image => {
            const imageRef = ref(storage, `images/${image.name}`);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                    console.log(`urllllllllllll ${url}`)
                });
            });
        }))
        addRealestate();
        restForm();
    };
    const addRealestate = async () => {
        setMessage("Loading...")
        try {
            const docRef = await addDoc(collection(db, "realestate"), {
                "name": name,
                "phone": phone,
                "email": email,
                "location": location,
                "area": area,
                "rentOrSell": rentOrSell,
                "price": price,
                "status": status,
                "rooms": rooms,
                "descreption": descreption,
                "urls": urls,
            });
            setMessage("Done!");
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            setMessage(`Faild!! Check your internet connection`);
            console.error("Error adding document: ", e);
        }
    }
    function changeHandlerName(e) {
        setName(e.target.value);
    }
    function changeHandlerPhone(e) {
        setPhone(e.target.value);
    }
    function changeHandlerEmail(e) {
        setEmail(e.target.value);
    }
    function changeHandlerLocation(e) {
        setLocation(e.target.value);
    }
    function changeHandlerArea(e) {
        setArea(e.target.value);
    }
    function changeHandlerRentOrSell(e) {
        setRentOrSell(e.target.value);
    }
    function changeHandlerPrice(e) {
        setPrice(e.target.value);
    }
    function changeHandlerStatus(e) {
        setStatus(e.target.value);
    }
    function changeHandlerRooms(e) {
        setRooms(e.target.value);
    }
    function changeHandlerDescription(e) {
        setDescreption(e.target.value);
    }
    function changeHandlerSignEmail(e) {
        setSinEmail(e.target.value);
    }
    function changeHandlerPassword(e) {
        setPassword(e.target.value);
    }
    console.log(images)

    const resetFileInput = () => {
        inputRef.current.value = null;
    };
    function restForm() {
        setName("")
        setPhone("")
        setEmail("")
        setLocation("")
        setArea("")
        setRentOrSell("")
        setPrice("")
        setStatus("")
        setRooms("")
        setDescreption("")
        resetFileInput()
    }
    return (
        <div className="add-page">
            <h2>Add Realestate</h2>
            {isLogged && <div className="form-container">
                <form className="form" onSubmit={uploadFile}>
                    <div className="personal label-title"><b>Personal Info:</b>
                        <label className="label-title">Name</label>
                        <input type="text" className="form-control input-text" placeholder="Name" value={name} onChange={changeHandlerName} required></input>
                        <label className="label-title">Phone Number</label>
                        <input type="number" className="form-control input-text" placeholder="Phone Number" value={phone} onChange={changeHandlerPhone} required></input>
                        <label className="label-title">Email</label>
                        <input type="email" className="form-control input-text" placeholder="Email" value={email} onChange={changeHandlerEmail} required></input>
                    </div>
                    <hr />
                    <div className="realestate-details label-title"><b>Realestate Details:</b>
                        <label className="label-title">Location</label>
                        <input type="text" className="form-control input-text" placeholder="Location" value={location} onChange={changeHandlerLocation} required></input>
                        <label className="label-title">Area</label>
                        <input type="number" className="form-control input-text" placeholder="Area" value={area} onChange={changeHandlerArea} required></input>
                        <label className="label-title">Rent/Sell</label>
                        <select className="form-select input-text" onChange={changeHandlerRentOrSell} >
                            <option value={'Rent'}>Rent</option>
                            <option value={'Sell'}>Sell</option>
                        </select>
                        <label className="label-title">Status</label>
                        <select className="form-select input-text" onChange={changeHandlerStatus} >
                            <option value={'Furnished'}>Furnished</option>
                            <option value={'Unfurnished'}>Unfurnished</option>
                        </select>
                        <label className="label-title">Rooms</label>
                        <input type="number" className="form-control input-text" placeholder="Rooms" value={rooms} onChange={changeHandlerRooms} required min="0"></input>
                        <label className="label-title">Price</label>
                        <input type="number" className="form-control input-text" placeholder="Price" value={price} onChange={changeHandlerPrice} required min="0"></input>
                        <label className="label-title">Description</label>
                        <textarea type="text" className="form-control input-text" placeholder="Descreption" value={descreption} onChange={changeHandlerDescription} maxLength={50}></textarea>
                        <label className="label-title">Photos </label>
                        <input type="file"
                            ref={inputRef}
                            multiple
                            className="form-control input-text"
                            onChange={(e) => {
                                for (let i = 0; i < e.target.files.length; i++) {
                                    const newImage = e.target.files[i];
                                    setImages((prevState) => [...prevState, newImage]);
                                    setUrls((prevState) => [...prevState, `https://firebasestorage.googleapis.com/v0/b/realestate-2fe23.appspot.com/o/images%2F${newImage.name}?alt=media&token=7d3a2da6-0721-4787-a46b-b9f821b849aa`])
                                }
                            }}
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
                {message && <div className="message">{message}</div>}
            </div>}
            {!isLogged && <Link to={"/Login"} className="btn btn-danger back-get">Back To Login</Link>}
        </div>
    );

}

export default AddRealestate;