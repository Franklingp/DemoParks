import React from 'react';
import './styles/Details.css';

class  Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            park: {}
        }
    }
    
    componentDidMount(){
        this.setState({
            park: {...this.props.location.state}
        });
    }

    render(){
        const { fullName, description, url, images, weatherInfo, states, operatingHours } = this.state.park;
        console.log(this.state.park);
        return(
            images !== undefined && <section className="details">
                <h1>{fullName}</h1>
                <img src={images[0].url} alt={images[0].altText} className="img-details"/>
                <p>{description}</p>
                <p>Estado: {states}</p>
                <br/>
                <span> 
                    Sitio Web: 
                    <a href={url}>{url}</a>
                </span>
                <br/>

                <h4>Informacion de clima</h4>
                <p>{weatherInfo}</p>

                <h4>Horas de operacion</h4>
                <p>{operatingHours[0].description}</p>

            </section>
        )
    }
}

export default Details;