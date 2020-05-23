import React from 'react';
import { withRouter } from 'react-router-dom';
import Map from '../components/Map';
import CardPark from '../components/CardPark';
import "./styles/Home.css";
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            marker: null,
            showMap: false
        }
    }

    handleHoover = (data) => {
        console.log("evento");
        console.log(data);
        this.setState({
            marker: data
        })
    }

    handleMap = () => {
        this.setState({
            showMap: !this.state.showMap
        })
    }

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
                                <CardPark park={park}
                                handleHoover={this.handleHoover}
                                />
                                <hr/>
                            </React.Fragment>
                        ))
                    }
                </section>
                <div className={this.state.showMap === true ? "map-home show-map" : "map-home"}>
                    <Map marker={this.state.marker}/>
                </div>
                <button className="map-button" onClick={this.handleMap}>Map</button>
            </section>
        )
    }
}

//Configuracion para conectar con redux
const mapStateToProps = (state) => ({
    parks: state
})

export default connect(mapStateToProps)(withRouter(Home));