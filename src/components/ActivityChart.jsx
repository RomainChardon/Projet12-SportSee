import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useEffect, useState} from "react";

function ActivityChart({userSelected}) {

    const [dataActivity, setdataActivity] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.1.111:3000/user/${userSelected}/activity`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setdataActivity(data.data.sessions);
            })
    }, [userSelected]);

    if (dataActivity != null) {

        return (
            <div className="bar-chart">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={200}
                        data={dataActivity}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="kilogram" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="calories" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"> <p>proute</p></div>
    }

}

export default ActivityChart;
