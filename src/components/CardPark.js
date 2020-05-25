import React from 'react';
import { withRouter } from 'react-router-dom'
import './styles/CardPark.css';

const CardPark = (props) => {
    const {name, states, images, designation, addresses, contacts } = props.park;
    const phoneNumber = contacts.phoneNumbers[0].phoneNumber;

    const handleClick = () => {
        props.history.push("/details",props.park);
    }

    return (
        <article className="card" onClick={handleClick} 
        onMouseOver={() => props.handleHoover(props.park)} onMouseLeave={() => props.handleHoover(null)}>
            <img className="img-card" src={images[0].url} alt={images[0].altText}/>
            <h3>{name}</h3>
            <p>{states}</p>
            <p>{designation}</p>
            <div className="bold">Entradas</div>
            {
                addresses.map((addres, index) => (
                    <div key={index}>{addres.line1}</div>
                ))
            }
            <div><span className="bold">Contacto:</span> {phoneNumber}</div>
        </article>
    )
}

export default withRouter(CardPark);
