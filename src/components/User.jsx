import {useEffect, useState} from "react";
import CardCounter from "./CardCounter.jsx";
import ActivityChart from "./Chart/ActivityChart/ActivityChart.jsx";
import TimeChart from "./Chart/TimeChart.jsx";
import IntensityChart from "./Chart/IntensityChart.jsx";
import ScoreChart from "./Chart/ScoreChart.jsx";
function User({userSelected}) {
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.1.111:3000/user/${userSelected}`, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            setDataUser(data.data);
        })
    }, [userSelected]);

    if (dataUser != null) {
        return (
            <div className="main">
                <div className="user-name">
                    <h1>Bonjour {dataUser.userInfos.firstName}</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="user-data">
                    <div className="charts-group">
                        <ActivityChart userSelected={userSelected} />
                        <div className="charts-group-row">
                            <TimeChart userSelected={userSelected} />
                            <IntensityChart userSelected={userSelected} />
                            <ScoreChart userSelected={userSelected} />
                        </div>
                    </div>
                    <div className="counter-group">
                        {Object.entries(dataUser.keyData).map(([title, value]) => (
                            <CardCounter
                                key={title}
                                title={title}
                                value={value}
                            />
                        ))}
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div>
                <h1>Selection de l'utilisateur</h1>
            </div>
        )
    }

}

export default User;
