import { Link } from 'react-router-dom'
import './navbar.css'
function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>

                <li className="dropdown">
                    <button className="dropbtn">Products</button>
                    <div className="dropdown-content">
                        <Link to="/products/Beauty">Beauty</Link>
                        <Link to="/products/Bedding">Home</Link>
                        <Link to="/products/Electronics">Electronics</Link>
                        <Link to="/products/Fashion">Fashion</Link>
                        <Link to="/products/Garden">Garden</Link>
                        <Link to="/products/Kitchen">Kitchen</Link>
                        <Link to="/products/Sports">Sports</Link>
                    </div>
                </li>
                <li><a href="">Info</a></li>
            </ul>
        </div>
    )
}
export default NavBar