import {
    ResponsiveContainer,
    RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import {useEffect, useState} from "react";

function IntensityChart({userSelected}) {

    const [dataActivity, setdataActivity] = useState(null);
    const [dataKind, setdataKind] = useState(null);

    useEffect(() => {
        fetch(`http://192.168.1.111:3000/user/${userSelected}/performance `, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setdataActivity(data.data.data);
                setdataKind(data.data.kind);
            })
    }, [userSelected]);

    const formatData = () => {
        return dataActivity.map(item => {
            return {
                subject: dataKind[item.kind].charAt(0).toUpperCase() + dataKind[item.kind].slice(1),
                value: item.value,
                fullMark: 150,
            };
        });
    };

    if (dataActivity != null && dataKind != null) {

        return (
            <div className="radar-chart">
                <ResponsiveContainer width={300} height={300}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatData(dataActivity)}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    } else {
        <div className="bar-chart"> <p>proute</p></div>
    }

}

export default IntensityChart;
