import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header rendered");

    // 1) if no dependency array => useEffect is called on every render
    // 2) if dependency array is empty [] => useEeect is called on initial render (just Onces)
    // 3) if dependency array is provided => useEffect is called only when the dependency changes (Onces when dependency changes)
    //    -- Ex if dependency array is [btnName] => useEffect is called everytime the btnName is changes 
    useEffect(() =>
    {
        console.log("useEffect called");
    },[btnName])

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
             <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢" : "🔴"} 
                    </li>
                    <li>
                        <Link to="/" className="custom-link-header">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"  className="custom-link-header">About</Link>
                    </li>
                    <li>
                        <Link to="/contact"  className="custom-link-header">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/grocery"  className="custom-link-header">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn"
                    onClick = { () => {
                        btnName === "Login" ? setBtnName("Logout") :
                        setBtnName("Login");
                    }}
                    >{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};


export default Header;