/**
 * @return {JSX}
 *  @param {boolean} active
 *  @param {object} payload
 */
function ActivityTooltip({active, payload}) {
    if (active){
        return (
            <div className="activity-tooltip">
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>

        );
    }
    return null
}

export default ActivityTooltip;

