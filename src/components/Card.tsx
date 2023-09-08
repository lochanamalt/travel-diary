import markerLogo from '../assets/marker.svg'


function Card(props: any){
    const item = props.item;
   
 return (
    <div className='card'>
        <img className='card-img' src={`vacation_images/${item.imageUrl}`}/>
        <div className='card-content'>
            <div className='card-location-details'>
                <img className='card-marker' src={markerLogo}/>
                <span className='card-location'></span>{item.location}
                <a className='card-link' target='_blank' href={item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>
                {item.title}
            </h1>
            <h3>
                {item.startDate} - {item.endDate}
            </h3>
            <p>
                {item.description}
            </p>
        </div>
    </div>
 )
}

export default Card;