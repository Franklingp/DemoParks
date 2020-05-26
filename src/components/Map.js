import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import "./styles/Map.css";

import { withRouter } from 'react-router-dom';

const MapComponent = (props) => {
    var active = props.marker;
    const [popupOnClick, setPopup] = useState(null);

    //Metodo para gestionar cuando se le da click a un marcador
    const handleClick = (data) => { 
        setPopup(data);
    }

    //Metodo para gestionar el redireccionamiento cuando se hahga click en un popup
    const handlePush = () => {
        props.history.push('/details', popupOnClick);
    }

    return (
        <Map center={props.park ? [props.park.latitude, props.park.longitude] : [38.889993,-76.990332]} zoom={12}>
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
                active !== null &&
                <Popup position={[active.latitude, active.longitude]}>
                    <span>{active.name}</span>                    
                </Popup>
            }
        </Map>
    )
}

const mapStateToProps = (state) => ({
    parks: state.parks
})

export default connect(mapStateToProps)(withRouter(MapComponent));
