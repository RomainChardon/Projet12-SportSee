import {
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart, Line
} from 'recharts';
import {useEffect, useState} from "react";

function TimeChart({userSelected}) {

    const [dataActivity, setdataActivity] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.1.111:3000/user/${userSelected}/average-sessions`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setdataActivity(data.data.sessions);
            })
    }, [userSelected]);

    if (dataActivity != null) {

        return (
            <div className="line-chart">
                <ResponsiveContainer width={300} height={300}>
                    <LineChart
                        width={300}
                        height={300}
                        data={dataActivity}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <Tooltip />
                        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"> <p>proute</p></div>
    }

}

export default TimeChart;
