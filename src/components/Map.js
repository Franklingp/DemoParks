import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import "./styles/Map.css";
import { withRouter } from 'react-router-dom';

const MapComponent = (props) => {
    const [popupOnClick, setPopup] = useState(null);
    const [center, setCenter] = useState([38.889993,-76.990332]);
    var hover = props.marker;

    //Metodo para gestionar cuando se le da click a un marcador
    const handleClick = (data) => { 
        setPopup(data);
    }

    //Metodo para gestionar el redireccionamiento cuando se hahga click en un popup
    const handlePush = () => {
        props.history.push('/details', popupOnClick);
    }

    //Este metodo se encarga de controlar el centro del mapa
    useEffect(()=>{
        if(props.park){
            console.log("park");
            setCenter([props.park.latitude, props.park.longitude]);
        }
        if(hover){
            console.log("hover");
            setCenter([hover.latitude, hover.longitude]);
        }
    }, [props.park, hover]);

    return (
        <Map center={center} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {
                //Este marcador es el que se muestra en caso de que se le pase por props solo
                //una sola ubicacion como es el caso de cuando se usa el componente de mapa en 
                //detalles
                props.park &&
                <Marker position={[props.park.latitude, props.park.longitude]}
                onclick={() => {handleClick(props.park)}}
                />
            }
            {
                //Estos marcadores son los que se muestran en caso de que se quiera mostrar todos
                //los marcadores del estado global de redux
                props.parks.length !== 0 && !props.park &&
                props.parks.map(park => (
                    <Marker key={park.id}
                    position={[park.latitude, park.longitude]}
                    onclick={() => {handleClick(park)}}
                    />
                ))
            }
              
             {   //Este es el popup que se abre cuando haces click en un punto
                popupOnClick !== null &&
                <Popup position={[popupOnClick.latitude, popupOnClick.longitude]}
                onClose={() => setPopup(null)}>
                    <span style={{cursor: "pointer"}} className="highlight" onClick={handlePush}>
                        {popupOnClick.name}
                    </span>                    
                </Popup>
            }
            {
                //Este popup es el que se are cuando se hace un hover en la lista de parques
                hover !== null &&
                <Popup position={[hover.latitude, hover.longitude]}>
                    <span>{hover.name}</span>                    
                </Popup>
            }
        </Map>
    )
}

const mapStateToProps = (state) => ({
    parks: state.parks
})

export default connect(mapStateToProps)(withRouter(MapComponent));
