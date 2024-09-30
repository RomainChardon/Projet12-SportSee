import ShowUser from "../components/ShowUser.jsx";
import {useParams} from "react-router-dom";

function Home() {
    const { id } = useParams();
    /* TODO: classe de modélisation */
    return (
        <ShowUser userSelected={id} />
    )

}

export default Home;
