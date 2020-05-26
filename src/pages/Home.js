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
            showMap: window.screen.width > 650 ? true : false //Esto es para verificar si es mobil o escritorio
        }
    }

    //Este es un metodo que se encarga de captar si se esta haciendo hover en un parque y enviar
    //los datos al componente Map para actualizar el mapa
    handleHoover = (data) => {
        this.setState({
            marker: data
        })
    }

    //Este metodo se encarga de controlar si se muestra el mapa o si se oculta en modo mobil
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
                        //En esta seccion se esta cargando la lista de parques
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
                {
                    //En esta seccion se esta cargando el componente de mapa
                    this.state.showMap && <div className="map-home">
                        <Map marker={this.state.marker} park={null}/>
                    </div>
                }
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