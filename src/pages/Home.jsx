import ShowUser from "../components/ShowUser.jsx";
import {useParams} from "react-router-dom";

/**
 * @return {JSX}
 */
function Home() {
    const { id } = useParams();
    return (
        <ShowUser userSelected={id} />
    )

}

export default Home;
