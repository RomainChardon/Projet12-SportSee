import {
    Legend,
    ResponsiveContainer,
    RadialBar, RadialBarChart, PolarAngleAxis
} from 'recharts';
import {useEffect, useState} from "react";

function ScoreChart({userSelected}) {

    const [dataActivity, setdataActivity] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.1.111:3000/user/${userSelected}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                let valueData = data.data.todayScore;
                if (valueData === undefined) {
                    valueData = data.data.score;
                }
                setdataActivity([
                    {
                        "name" : "score",
                        "value" : valueData * 100,
                        "fill": "#83a6ed"
                    }
                ]);
            })
    }, [userSelected]);

    if (dataActivity != null) {
        return (
            <div className="radial-chart">
                <ResponsiveContainer width={300} height={300}>
                    <RadialBarChart
                        width={300}
                        height={250}
                        innerRadius="80%"
                        outerRadius="100%"
                        data={dataActivity}
                        startAngle={230}
                        endAngle={-130}
                    >
                        <PolarAngleAxis type="number" domain={[1, 100]} />
                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='value' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"> <p>proute</p></div>
    }

}

export default ScoreChart;
