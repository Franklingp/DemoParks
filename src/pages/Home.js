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
        const parks = this.props.parks;
        return(
            <section className="container">
                <section className="list-card">
                    <h1 className="main-title">Washingtong DC Parks</h1>
                    {
                        parks.length !== 0 &&
                        parks.map(park => (
                            <React.Fragment key={park.id}>
                                <CardPark park={park}
                                handleHoover={this.handleHoover}
                                />
                                <hr className="vector-horizontal"/>
                            </React.Fragment>
                        ))
                    }
                </section>
                <div className={this.state.showMap === true ? "map-home show-map" : "map-home"}>
                    <Map marker={this.state.marker} park={null}/>
                </div>
                <button className="map-button" onClick={this.handleMap}>Map</button>
            </section>
        )
    }
}

//Configuracion para conectar con redux
const mapStateToProps = (state) => ({
    parks: state.parks
})

export default connect(mapStateToProps)(withRouter(Home));