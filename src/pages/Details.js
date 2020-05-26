import React from 'react';
import './styles/Details.css';
import Map from '../components/Map';

class  Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            park: {}
        }
    }
    
    //Aqui esta cargando en el estado los datos que fueron pasados de la lista de parques a 
    //el componente de detalles
    componentDidMount(){
        this.setState({
            park: {...this.props.location.state}
        });
    }

    render(){
        const { fullName, description, url, images, weatherInfo, states, operatingHours } = this.state.park;
        return(
            images !== undefined && <section className="content">
                <h1>{fullName}</h1>
                <img src={images[0].url} alt={images[0].altText} className="img-details"/>
                <p>{description}</p>
                <p><span className="bold">State:</span> {states}</p>
                <br/>
                <div> 
                    <span className="bold">Website: </span> 
                    <a href={url} className="highlight">Here</a>
                </div>
                <hr className="vector-horizontal"/>
                {
                    images.length > 1 &&
                    <img src={images[1].url} alt={images[1].altText} className="img-details"/>
                }

                <h3>Weather Info</h3>
                <p>{weatherInfo}</p>
                <hr className="vector-horizontal"/>
                {
                    images.length > 2 &&
                    <img src={images[2].url} alt={images[2].altText} className="img-details"/>
                }

                <h3>Operating Hours</h3>
                <p>{operatingHours[0].description}</p>

                <hr className="vector-horizontal"/>
                <h2>Map</h2>
                <div className="map-details">
                    <Map park={this.state.park} marker={null}/>
                </div>

            </section>
        )
    }
}

export default Details;