import {useEffect, useState} from "react";
import CardCounter from "./CardCounter.jsx";
import ActivityChart from "./Chart/ActivityChart/ActivityChart.jsx";
import TimeChart from "./Chart/TimeChart/TimeChart.jsx";
import IntensityChart from "./Chart/IntensityChart.jsx";
import ScoreChart from "./Chart/ScoreChart.jsx";
import {makeUser} from "../services/makeUser.jsx";
import {makeMockedUser} from "../services/makeMockedUser.jsx";
function ShowUser({userSelected}) {
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        // for use API
        // makeUser(userSelected).then((data) => {
        //     setDataUser(data);
        // });

        // for use MOCK API
        makeMockedUser(userSelected).then((data) => {
            setDataUser(data);
        });
    }, [userSelected]);

    if (dataUser != null) {
        return (
            <div className="main">
                <div className="user-name">
                    <h1>Bonjour {dataUser.firstName}</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="user-data">
                    <div className="charts-group">
                        <ActivityChart dataUser={dataUser} />
                        <div className="charts-group-row">
                            <TimeChart dataUser={dataUser} />
                            <IntensityChart dataUser={dataUser} />
                            <ScoreChart dataUser={dataUser} />
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
            <div className="main">
                <h1>Pas de data</h1>

            </div>
        )
    }

}

export default ShowUser;
