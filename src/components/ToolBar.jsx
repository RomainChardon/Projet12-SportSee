/**
 * @return {JSX}
 */
function ToolBar() {
    return (
        <div id="tool-bar">
            <div className="tool">
                <img src="/img/zen.png" className="tool-img" alt="zen icon"/>
                <img src="/img/water.png" className="tool-img" alt="water icon"/>
                <img src="/img/bike.png" className="tool-img" alt="bike icon"/>
                <img src="/img/weight.png" className="tool-img" alt="weight icon"/>
            </div>
            <p className="copyright">Copyright SportSee 2020</p>
        </div>
    )
}

export default ToolBar;
