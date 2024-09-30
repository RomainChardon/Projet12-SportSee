function TimeTooltip({active, payload}) {
    if (active){
        return (
            <div className="time-tooltip">
                <p>{payload[0].value} min</p>
            </div>

        );
    }
    return null
}

export default TimeTooltip;

