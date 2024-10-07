import {
    Legend,
    ResponsiveContainer,
    RadialBar, RadialBarChart, PolarAngleAxis, XAxis, YAxis
} from 'recharts';
import {useEffect, useState} from "react";

function ScoreChart({dataUser}) {

    if (dataUser != null) {
        return (
            <div className="smallchart">
                <div className="head-chart">
                    <h3 className="title-chart">
                        Score
                    </h3>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        width="100%"
                        height="100%"
                        innerRadius="85%"
                        outerRadius="100%"
                        data={dataUser.getScore()}
                        startAngle={230}
                        endAngle={-130}
                    >
                        <PolarAngleAxis type="number" domain={[1, 100]} tick={false}/>
                        <RadialBar minAngle={15} clockWise={true} dataKey="value" fill="#ff0000" background cornerRadius={10} />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="score-title">
                    <p>{dataUser.getScore()[0].value}%</p>
                    <p>de votre objectif</p>
                </div>
            </div>
        )
    } else {
        <div className="bar-chart"><p>Pas de donnée</p></div>
    }

}

export default ScoreChart;
