import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="sidenav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/exploratory">Exploratory</Link>
            </li>
            <li>
                <Link to="/tech1">Tech 1</Link>
            </li>
            <li>
                <Link to="/tech2">Tech 2</Link>
            </li>
            <li>
                <Link to="/tech3">Tech 3</Link>
            </li>
        </nav>
    );
}

export default Nav;