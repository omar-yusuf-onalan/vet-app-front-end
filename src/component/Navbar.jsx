import {entityTemplates} from "../template/EntityTemplates.js";
import {Link} from "react-router-dom";

const Navbar = ({setRefreshContent}) => {
    const handleClick = () => {
        setRefreshContent(prev => !prev)
    }

    return (
        <nav className="navbar sticky-top navbar-dark bg-primary">
            <div className="container-fluid col-6">
                <Link className="text-decoration-none text-light" to="/" onClick={handleClick}>Vet App</Link>

                {entityTemplates.map(entityTemplate => (
                    <Link
                        className="text-decoration-none text-light"
                        key={entityTemplate.name}
                        onClick={handleClick}
                        to={entityTemplate.path}
                    >{entityTemplate.name}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar