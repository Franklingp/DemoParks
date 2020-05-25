import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import "./styles/Map.css";

const MapComponent = (props) => {
    var active = props.marker;
    const [popupOnClick, setPopup] = useState(null);

    const handleClick = (data) => { 
        setPopup(data);
    }
    return (
        <Map center={props.park ? [props.park.latitude, props.park.longitude] : [38.916554,-77.025977]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {
                props.park &&
                <Marker position={[props.park.latitude, props.park.longitude]}
                onclick={() => {handleClick(props.park)}}
                />
            }
            {
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
                    <span>{popupOnClick.name}</span>                    
                </Popup>
            }
            {
                //Este popup es el que se are cuando se hace un hover
                active !== null &&
                <Popup position={[active.latitude, active.longitude]}>
                    <span>{active.name}</span>                    
                </Popup>
            }
        </Map>
    )
}

const mapStateToProps = (state) => ({
    parks: state
})

export default connect(mapStateToProps)(MapComponent);
