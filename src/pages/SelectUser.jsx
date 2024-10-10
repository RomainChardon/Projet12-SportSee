import {Link} from "react-router-dom";

/**
 * @return {JSX}
 */
function SelectUser() {

    return (
        <div className="main">
            <Link to={`/user/12`}>
                <p>Karl</p>
            </Link>
            <Link to={`/user/18`}>
                <p>Celia</p>
            </Link>
        </div>
    )

}

export default SelectUser;
