import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Text, LineChart
} from 'recharts';
import {useEffect, useState} from "react";
import ActivityTooltip from "./ActivityTooltip.jsx";

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
            <div className="chart-container">
                <div className="head-chart">
                    <h3 className="title-chart">Activité quotidienne</h3>
                    <div className="legend-chart">
                        <div className="tuile-chart">
                            <div className="icon-chart" style={{backgroundColor : "#e60000"}}  ></div>
                            <p className="text-chart">Poids (kg)</p>
                        </div>
                        <div className="tuile-chart">
                            <div className="icon-chart" style={{backgroundColor: "#282d30"}}></div>
                            <p className="text-chart">Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={200}
                        margin={{ top: 40, right: 30, bottom: 20, left: 30 }}
                        data={dataActivity}
                        barSize={12}
                        barGap={8}
                    >
                        <CartesianGrid strokeDasharray="2 3" vertical={false}/>
                        <XAxis dataKey="day" tickLine={false} tick={{stroke:'#9B9EAC'}} dy={15} />
                        <YAxis orientation="right" tickLine={false} axisLine={false} tick={{stroke:'#9B9EAC'}} dx={15}/>
                        <Tooltip content={ActivityTooltip}/>

                        <Bar name="Poids (kg)" dataKey="kilogram" fill="#282d30" radius={[20, 20, 0, 0]}/>
                        <Bar dataKey="calories" fill="#e60000" radius={[20, 20, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"><p>Pas de data !</p></div>
    }

}

export default ActivityChart;
