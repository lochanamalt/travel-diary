import Card from "./Card";
import destinations from "../data/destinations";
function Content(){
    const destinationTags = destinations.map(d => {
        return <Card item={d}/>
    })
    return (
        <div className="content">
        {destinationTags}
        </div>
    )
}
export default Content;

