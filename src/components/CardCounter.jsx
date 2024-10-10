import json from "../assets/json/userCounter.json"

/**
 * @return {JSX}
 *  @param {string} title
 *  @param {number} value
 */
function CardCounter({title, value}) {

    const moreData = json.find((element) => element.id === title);

    return (
        <div className="counter">
            <div className="counter-logo" style={{background: moreData.color}}>
                <img src={"../public/svg/" + moreData.svg} alt={"image compteur " + moreData.name}/>
            </div>
            <div className="counter-value">
                <p className="value-unit">{value}{moreData.unit}</p>
                <p className="value-name">{moreData.name}</p>
            </div>
        </div>
    )
}

export default CardCounter;
