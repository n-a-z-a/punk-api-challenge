import React from 'react'
import Card from '../../components/Card/Card'
import './CardList.scss'

const CardList = ({beerArr}) => {

    const beerJSX = beerArr.map (beer => {
        return (<Card 
                key = {"beer" + beer.id}
                name = {beer.name}
                imgURL = {beer.image_url}
                tagline = {beer.tagline}
                abv = {beer.abv}
                description = {beer.description}
            />)     
        })
  return (
    <div className='beer-card-container'>
      {beerJSX}
    </div>  
  )
}

export default CardList