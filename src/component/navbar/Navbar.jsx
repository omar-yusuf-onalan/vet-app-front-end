import "./Navbar.style.css"
import {entityTemplates} from "../../template/EntityTemplates.js";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            {entityTemplates.map(entityTemplate => (
                <Link to={entityTemplate.path}>{entityTemplate.name}</Link>
            ))}
        </div>
    )
}

export default Navbar