import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>JiffyHealth</h1>
            <div className="links">
                <Link to="/" style={
                    {color: '#333',
                     _hoverState: '#bc74c0'}
                }>Home</Link>
                <a href="/about" style={{color: '#333', hover: '#bc74c0'}}>About Us</a>
            </div>
        </nav>
    );
}

export default Navbar;