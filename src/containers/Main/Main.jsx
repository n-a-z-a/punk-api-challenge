//change
import React, {useEffect, useState} from 'react'
import CardList from '../CardList/CardList'
import NavBar from '../NavBar/NavBar'

const Main = () => {
    const [beerArr, setBeerArr] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [isHighABV, setIsHighABV] = useState(false);
    const [isClassic, setIsClassic] = useState(false);
    const [isAcidic, setIsAcidic] = useState(false);


    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(response => response.json())
            .then(beers => {
                setBeerArr(beers)
            })
    }, [])

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput)
        console.log(cleanInput)
    } 

    const handleABVCheckBox = ()  => {
        setIsHighABV(!isHighABV);
    }

    const handleClassicCheckbox = () => {
        setIsClassic(!isClassic)
    }

    const handleAcidicCheckbox = () => {
        setIsAcidic(!isAcidic)
    }

    const highABVBeers = beerArr.filter(beer => {
        return beer.abv > 6
    })

    const classicBeers = beerArr.filter(beer => {
        const beerFirstBrewingDate = beer.first_brewed.split('/')[1]
        return beerFirstBrewingDate < 2010
        }) 

     const acidicBeers = beerArr.filter(beer => {
        return beer.ph < 4
        })


    useEffect(() => {
        if (isClassic===true) {
            setBeerArr(classicBeers)
        } else {
            fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(response => response.json())
            .then(beers => {
                setBeerArr(beers)
            })
        }
        // eslint-disable-next-line
    },[isClassic])

    useEffect(() => {
        if (isAcidic===true) {
            setBeerArr(acidicBeers)
        } else {
            fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(response => response.json())
            .then(beers => {
                setBeerArr(beers)
            })
        }
        // eslint-disable-next-line
    },[isAcidic])
    
    useEffect(() => {
        if (isHighABV===true) {
            setBeerArr(highABVBeers)
        } else {
            fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(response => response.json())
            .then(beers => {
                setBeerArr(beers)
            })
        } 
        // eslint-disable-next-line
    }, [isHighABV])

    const filteredBeers = beerArr.filter(beer => {
        const beerNameLower = beer.name.toLowerCase();
        return beerNameLower.includes(searchTerm) 
    })


    return (
        <>
        <NavBar 
            searchTerm={searchTerm} 
            handleInput={handleInput}  
            isHighABV={isHighABV}
            handleABVCheckbox={handleABVCheckBox}
            isClassic={isClassic}
            handleClassicCheckbox={handleClassicCheckbox}
            isAcidic={isAcidic}
            handleAcidicCheckbox={handleAcidicCheckbox}
            searchCount={filteredBeers.length}
            />
        <CardList beerArr={filteredBeers}/>
        </>
  )
}

export default Main