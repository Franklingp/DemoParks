import React from 'react';
import './styles/CardPark.css';

const CardPark = (props) => {
    const {name, description, directionsInfo, states, images} = props;

    return (
        <article>
            <img className="img-card" src={images[0].url} alt={images[0].altText}/>
            <h3>{name}</h3>
            <span>{states}</span>
            <p>{description}</p>
            <hr/>
        </article>
    )
}

export default CardPark
