import {
    ResponsiveContainer,
    RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';

/**
 * @return {JSX}
 *  @param {object} dataUser
 */
function IntensityChart({dataUser}) {
    if (dataUser != null) {
        return (
            <div className="intensity-container smallchart">

                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx='50%' cy='50%' outerRadius='55%' data={dataUser.getFormattedIntensity()}>
                        <PolarGrid gridType="polygon"/>
                        <PolarAngleAxis dataKey="subject" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 11 }}/>
                        <Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"><p>Pas de data</p></div>
    }

}

export default IntensityChart;
