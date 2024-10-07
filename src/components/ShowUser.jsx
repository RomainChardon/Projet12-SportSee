import {useEffect, useState} from "react";
import CardCounter from "./CardCounter.jsx";
import ActivityChart from "./Chart/ActivityChart/ActivityChart.jsx";
import TimeChart from "./Chart/TimeChart/TimeChart.jsx";
import IntensityChart from "./Chart/IntensityChart.jsx";
import ScoreChart from "./Chart/ScoreChart.jsx";
import {fetchUser} from "../services/fetchUser.jsx";
import {fetchUserActivity} from "../services/fetchUserActivity.jsx";
import {fetchUserIntensity} from "../services/fetchUserIntensity.jsx";
import {fetchUserAverage} from "../services/fetchUserAverage.jsx";
import User from "../class/User.jsx";
function ShowUser({userSelected}) {
    const [dataUser, setDataUser] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const dataInfo = await fetchUser(userSelected);
            const dataActivity = await fetchUserActivity(userSelected);
            const dataIntensity = await fetchUserIntensity(userSelected);
            const dataAverage = await fetchUserAverage(userSelected);

            let user = new User(dataInfo, dataActivity, dataIntensity, dataAverage);
            setDataUser(user);
        };

        if (userSelected) {
            getData();
        }
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
