import {useState} from "react";
import User from "../components/User.jsx";

function Home() {
    const [userSelected, setUserSelected] = useState(12);

    return (
        <User userSelected={userSelected} />
    )
}

export default Home;
