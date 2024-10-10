import {
    XAxis,
    ResponsiveContainer,
    LineChart, Line, YAxis, Tooltip, Rectangle
} from 'recharts';
import TimeTooltip from "./TimeTooltip.jsx";

/**
 * @return {JSX}
 *  @param {object} dataUser
 */
function TimeChart({dataUser}) {
    const CustomCursor = (props) => {
        const { points, width, height, stroke } = props;
        const { x, y } = points[0];
        return (
            <Rectangle
                width={1000}
                height={1000}
                x={x}
                y={y - 100}
                style={{background: 'red', opacity: 0.1, zIndex: 9, position: "absolute"}}
            />
        );
    };

    if (dataUser != null) {
        return (
            <div className="time-container smallchart">
                <div className="head-chart" style={{position: "absolute", left: "10px"}}>
                    <h3 className="title-time">
                        Durée moyenne des sessions
                    </h3>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width="100%"
                        height="100%"
                        data={dataUser.getFormattedAverage()}
                    >
                        <XAxis dataKey="day" type="category" tickLine={false} axisLine={false} tick={{fontSize: 14, stroke:'rgba(255, 255, 255, 0.7)'}} dy={0}/>
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
