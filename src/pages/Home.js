import React from 'react';
import { withRouter } from 'react-router-dom';
import Map from '../components/Map';
import CardPark from '../components/CardPark';
// import { getParks } from '../services/fetch';
import "./styles/Home.css";
import { connect } from 'react-redux';

class Home extends React.Component {
    render(){
        console.log(this.props);
        const parks = this.props.parks;
        return(
            <section className="container">
                <section className="list-card">
                    {
                        parks.length !== 0 &&
                        parks.map(park => (
                            <React.Fragment key={park.id}>
                                <CardPark park={park}/>
                                <hr/>
                            </React.Fragment>
                        ))
                    }
                </section>
                <div className="map-home"> 
                    <Map/>
                </div>
            </section>
        )
    }
}

//Configuracion para conectar con redux
const mapStateToProps = (state) => ({
    parks: state
})

export default connect(mapStateToProps)(withRouter(Home));