import {
    XAxis,
    CartesianGrid,
    ResponsiveContainer,
    LineChart, Line, YAxis, Tooltip, ReferenceArea, Rectangle
} from 'recharts';
import {useEffect, useState} from "react";
import TimeTooltip from "./TimeTooltip.jsx";

function TimeChart({dataUser}) {
    const CustomCursor = (props) => {
        const { points, width, height, stroke } = props;
        const { x, y } = points[0];
        const { x1, y1 } = points[1];
        return (
            <Rectangle
                fill="#e60000"
                stroke="#e60000"
                x={x}
                y={y}
                width={width}
                height={350}
            />
        );
    };

    if (dataUser != null) {
        return (
            <div className="time-container chart-container">
                <div className="head-chart">
                    <h3 className="title-time">
                        Durée moyenne des sessions
                    </h3>
                </div>
                <ResponsiveContainer width={300} height={300}>
                    <LineChart
                        width={300}
                        height={300}
                        data={dataUser.getFormattedAverage()}
                    >
                        <XAxis dataKey="day" type="category" tickLine={false} axisLine={false} tick={{fontSize: 14, stroke:'rgba(255, 255, 255, 0.7)'}} dy={15}/>
                        <YAxis dataKey="sessionLength" hide={true}/>
                        <Tooltip content={<TimeTooltip/>} cursor={<CustomCursor />}/>
                        <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"><p>Pas de data</p></div>
    }

}

export default TimeChart;
