import { useContext, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let [btnLabel, setBtnLabel] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const user = useContext(UserContext);
    //Subscribing to the store sing a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={APP_LOGO} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button  className="px-4" onClick={() => {
                        btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
                    }}>{btnLabel}</button>
                    <li className="px-4 font-bold">{user.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
// {cartItems.length}
export default Header;