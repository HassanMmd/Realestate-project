import Card from "./Card"
import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import "./GetRealestate.css"
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../features/infoSlice";
import { Link } from "react-router-dom";

function GetRealestate() {
    const [area, setArea] = React.useState("");
    const [rentOrSell, setRentOrSell] = React.useState("Rent");
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [status, setStatus] = React.useState("Furnished");
    const [rooms, setRooms] = React.useState("");
    const [realestate, setRealestate] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [m, setM] = React.useState("");
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
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.auth.auth)
    const fetchPost = async () => {
        try {
            await getDocs(collection(db, "realestate"))
                .then((querySnapshot) => {
                    if (!querySnapshot) {
                        throw Error('Could not fetch the data')

                    } else if (querySnapshot) {
                        const newData = querySnapshot.docs
                            .map((doc) => ({ ...doc.data(), id: doc.id }));
                        setRealestate(newData);
                        addInfoRedux(newData);
                        setMessage('Done')
                        console.log("wwwwwwwwwww", newData);
                    }
                })
        }
        catch (e) {
            setMessage(`Faild!! Check your internet connection to load the Rating`);
        }
    }

    const searchResultPrice = async (e) => {
        e.preventDefault();
        console.log(from)
        console.log(to)
        const querySnapshot = await getDocs(p);
        const newwdata = querySnapshot.docs;
        console.log(`rsrs ${newwdata}`);
        if (!newwdata.length) {
            setM("noItem")
        } else {
            newwdata.forEach((doc) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                console.log(doc.id, " => ", doc.data());
                setRealestate(newData);
                setM("")
            });
        }
        restForm();
    }
    const searchResultArea = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(a);
        const newwdata = querySnapshot.docs;
        console.log(`rsrs ${newwdata}`);
        if (!newwdata.length) {
            setM("noItem")
        } else {
            newwdata.forEach((doc) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                console.log(doc.id, " => ", doc.data());
                setRealestate(newData);
                setM("")
            });
        }
        restForm();
    }
    const searchResultRooms = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(r);
        const newwdata = querySnapshot.docs;
        console.log(`rsrs ${newwdata}`);
        if (!newwdata.length) {
            setM("noItem")
        } else {
            newwdata.forEach((doc) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                console.log(doc.id, " => ", doc.data());
                setRealestate(newData);
                setM("")
            });
        }
        restForm();
    }
    const searchResultRentOrSell = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(rs);
        const newwdata = querySnapshot.docs;
        console.log(`rsrs ${newwdata}`);
        if (!newwdata.length) {
            setM("noItem")
        } else {
            newwdata.forEach((doc) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                console.log(doc.id, " => ", doc.data());
                setRealestate(newData);
                setM("")
            });
        }
        restForm();
    }
    const searchResultStatus = async (e) => {
        e.preventDefault();
        const querySnapshot = await getDocs(s);
        const newwdata = querySnapshot.docs;
        console.log(`rsrs ${newwdata}`);
        if (!newwdata.length) {
            setM("noItem")
        } else {
            newwdata.forEach((doc) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                console.log(doc.id, " => ", doc.data());
                setRealestate(newData);
                setM("")
            });
        }
        restForm();
    }

    const a = query(collection(db, "realestate"),
        where("area", "<=", `${area}`));
    const r = query(collection(db, "realestate"),
        where("rooms", "==", `${rooms}`));
    const s = query(collection(db, "realestate"),
        where("status", "==", `${status}`));
    const rs = query(collection(db, "realestate"),
        where("rentOrSell", "==", `${rentOrSell}`));
    const p = query(collection(db, "realestate"),
        where("price", ">=", `${from}`),
        where("price", "<=", `${to}`));

    function restForm() {
        setArea("")
        setRentOrSell("Rent")
        setTo("")
        setStatus("Furnished")
        setRooms("")
        setFrom("")
    }

    function changeHandlerArea(e) {
        setArea(e.target.value);
    }
    function changeHandlerRentOrSell(e) {
        setRentOrSell(e.target.value);
    }
    function changeHandlerFrom(e) {
        setFrom(e.target.value);
    }
    function changeHandlerTo(e) {
        setTo(e.target.value);
    }
    function changeHandlerStatus(e) {
        setStatus(e.target.value);
    }
    function changeHandlerRooms(e) {
        setRooms(e.target.value);
    }
    function addInfoRedux(data) {
        dispatch(addInfo(data));
    }
    React.useEffect(() => {
        fetchPost();
    }, [])
    return (
        <div>
        {isLogged && <div className="get-realestate">
            <div>
                <h4 className="label-title">Search</h4>
                <div className="search-form-container">
                    <form className="form-search">
                        <div className="realestate-details-search">
                            <div className="search-item">
                                <label className="label-title">Area</label>
                                <div className="item-search-container">
                                    <input type="number" className="form-control input-text" placeholder="Area" value={area} onChange={changeHandlerArea}></input>
                                    <button className="btn btn-danger" onClick={searchResultArea}>Search</button>
                                </div>
                                <label className="label-title">Rent/Sell</label>
                                <div className="item-search-container">
                                    <select className="form-select input-text" value={rentOrSell} onChange={changeHandlerRentOrSell} >
                                        <option value={'Rent'} className="s">Rent</option>
                                        <option value={'Sell'}>Sell</option>
                                    </select>
                                    <button className="btn btn-danger" onClick={searchResultRentOrSell}>Search</button>
                                </div>
                            </div>
                            <div className="search-item">
                                <label className="label-title">Status</label>
                                <div className="item-search-container">
                                    <select className="form-select input-text" value={status} onChange={changeHandlerStatus} >
                                        <option value={'Furnished'}>Furnished</option>
                                        <option value={'Unfurnished'}>Unfurnished</option>
                                    </select>
                                    <button className="btn btn-danger" onClick={searchResultStatus}>Search</button>
                                </div>
                                <label className="label-title">Rooms</label>
                                <div className="item-search-container">
                                    <input type="number" className="form-control input-text" placeholder="Rooms" value={rooms} onChange={changeHandlerRooms} min="0"></input>
                                    <button className="btn btn-danger" onClick={searchResultRooms}>Search</button>
                                </div>
                            </div>
                            <div>
                                <label className="label-title">Price</label>
                                <div className="price-search">
                                    <input type="number" className="form-control input-text from" placeholder="From" value={from} onChange={changeHandlerFrom} min="0"></input>
                                    <input type="number" className="form-control input-text" placeholder="To" value={to} onChange={changeHandlerTo} min="0"></input>
                                    <button className="btn btn-danger" onClick={searchResultPrice}>Search</button>
                                </div>
                            </div>
                        </div>
                        {m === "noItem" && <div className="message-noItem">No Items in the search</div>}
                    </form>
                </div>
                <hr />
            </div>
            <div className="list">
                {!message && <div className="loading-all">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <h2 className="loading">Loading...</h2>
                </div>}
                {realestate.map((e) => {
                    return (
                        <div className="realestate">
                            <Card realestate={e} />
                        </div>)
                })}
            </div>
        </div>}
        {!isLogged && <Link to={"/Login"} className="btn btn-danger back-get">Back To Login</Link>}
        </div>
    );
}
export default GetRealestate;