import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import "./styles/Map.css";

const MapComponent = (props) => {
    const active = props.marker;

    return (
        <Map center={[38.916554,-77.025977]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            
            {
                props.parks.length !== 0 &&
                props.parks.map(park => (
                    <Marker key={park.id}
                    position={[park.latitude, park.longitude]}
                    />
                ))
            }
            {
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
