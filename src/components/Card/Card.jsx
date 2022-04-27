import React from 'react'
import "./Card.scss"

const Card = (props) => {
    const {name, imgURL, abv, tagline, description } = props;
    return (
        <div className='beer-card'>
            <h2 className='beer-card__heading'>{name}</h2>
            <img src={imgURL} alt={name} className='beer-card__image' />
            <h3 className='beer-card__tagline'>{tagline}</h3>
            <h4 className='beer-card__abv'>{abv}%</h4>
            <p className='beer-card__description'>{description}</p>
        </div>
    )
}

export default Card