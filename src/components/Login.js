import "./Login.css"
import { initializeApp } from "firebase/app";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../assets/logo-realestate.png"
import { useDispatch } from "react-redux";
import { checkAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const [signEmail, setSinEmail] = React.useState("admin@admin.com");
    const [password, setPassword] = React.useState("admin.1");
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);
    //const info = useSelector(state => state.info);
    const firebaseConfig = {
        apiKey: "AIzaSyBAb1Yv-NA1dRYPoLa0qBGFyryqfVy2F6A",
        authDomain: "realestate-2fe23.firebaseapp.com",
        projectId: "realestate-2fe23",
        storageBucket: "realestate-2fe23.appspot.com",
        messagingSenderId: "136227152488",
        appId: "1:136227152488:web:242f9bf492fbba378691dd"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    function addAuth(data) {
        dispatch(checkAuth(data))
    }
    const signInFunction = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, signEmail, password)
            .then((userCredential) => {
                if (userCredential) {
                    setOpen(true)
                    addAuth(true)
                    navigate("/GetRealestate",{replace:true})
                }
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setMessage("Wrong Email or Password")
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    function changeHandlerSignEmail(e) {
        setSinEmail(e.target.value);
    }
    function changeHandlerPassword(e) {
        setPassword(e.target.value);
    }
    return (
        <div className="login-container">
            <div className="login">
                <form className="login-form" onSubmit={signInFunction}>
                    <img className="logo-login" src={Logo} alt="logo"></img>
                    <div className="login-title">Login</div>
                    <input
                        type="text"
                        className="form-control input-text"
                        placeholder="Email"
                        required
                        value={signEmail}
                        onChange={changeHandlerSignEmail}
                    ></input>
                    <input
                        type="password"
                        className="form-control input-text"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={changeHandlerPassword}
                    ></input>
                    {message && <div className="message">{message}</div>}
                    <button type="submit" className="btn btn-danger">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;