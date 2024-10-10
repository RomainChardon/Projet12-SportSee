import {Link} from "react-router-dom";

/**
 * @return {JSX}
 */
function NavBar() {

    return (
        <div id="nav-bar">
            <div className="nav">
                <Link to={`/`}>
                    <img src="/img/logo.png" className="logo" alt="Logo de SportSee"/>
                </Link>
                <p>Acceuil</p>
                <p>Profil</p>
                <p>Reglage</p>
                <p>Communauté</p>
            </div>
        </div>
    )
}

export default NavBar;
