import React from 'react';
import { withRouter } from 'react-router-dom'
import './styles/CardPark.css';

const CardPark = (props) => {
    const {name, description, states, images} = props.park;

    const handleClick = () => {
        props.history.push("/details",props.park);
    }

    return (
        <article className="card" onClick={handleClick}>
            <img className="img-card" src={images[0].url} alt={images[0].altText}/>
            <h3>{name}</h3>
            <span>{states}</span>
            <p>{description}</p>
        </article>
    )
}

export default withRouter(CardPark);
