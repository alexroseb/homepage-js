import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="sidenav">
            {/* <li>
                <Link to="/">Home</Link>
            </li> */}
            <li>
                <Link to="/exploratory" className="explink">Exploratory</Link>
            </li>
            <li className="t1link">
                <Link to="/tech1">Tech 1</Link>
            </li>
            <li className="t2link">
                <Link to="/tech2">Tech 2</Link>
            </li>
            <li className="t3link">
                <Link to="/tech3">Tech 3</Link>
            </li>
        </nav>
    );
}

export default Nav;