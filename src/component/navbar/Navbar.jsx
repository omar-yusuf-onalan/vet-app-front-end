import "./Navbar.style.css"
import {entityTemplates} from "../../template/EntityTemplates.js";
import {Link} from "react-router-dom";

const Navbar = ({setRefreshContent}) => {
    const handleClick = () => {
        setRefreshContent(prev => !prev)
    }

    return (
        <div className="navbar">
            {entityTemplates.map(entityTemplate => (
                <Link
                    key={entityTemplate.name}
                    onClick={handleClick}
                    to={entityTemplate.path}
                >{entityTemplate.name}</Link>
            ))}
        </div>
    )
}

export default Navbar