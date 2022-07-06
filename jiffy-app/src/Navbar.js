import {Link} from "react-router-dom";

const Navbar = () => {

    const handleLogin = () => {

    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const renderLoginComponents = (
        <div className="links">
            <a className="navbarButtons" href="/">Home</a>
            {/*<a className="navbarButtons" href="/about">About Us</a>*/}
            <a className="navbarButtons" href="/login">Login</a>
        </div>

    );

    const renderLogoutComponents = (

        <div className="links">
            <a className="navbarButtons" href={localStorage.getItem("userType") === "patient" ? "../patient" : "../doctor"}>Home</a>
            {/*<a className="navbarButtons" href="/about">About Us</a>*/}
            <a className="navbarButtons" href="/myAccount">My Account</a>
            <a className="navbarButtons" onClick={handleLogout} style={{cursor:"pointer"}}>Logout</a>
        </div>

    );

    return (
        <nav className="navbar">
            <h1>JiffyHealth</h1>
            {localStorage.length === 0 ?
                renderLoginComponents
                :
                renderLogoutComponents
            }
        </nav>
    );
}

export default Navbar;