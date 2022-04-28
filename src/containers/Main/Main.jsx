//change
import React, {useEffect, useState} from 'react'
import CardList from '../CardList/CardList'
import NavBar from '../NavBar/NavBar'

const Main = () => {
    const [beerArr, setBeerArr] = useState([])
    const [originalBeerArr, setOriginalBeerArr] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [isHighABV, setIsHighABV] = useState(false);
    const [isClassic, setIsClassic] = useState(false);
    const [isAcidic, setIsAcidic] = useState(false);


    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(response => response.json())
            .then(beers => {
                setBeerArr(beers)
                setOriginalBeerArr(beers)
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

    const highABVBeers = originalBeerArr.filter(beer => {
        return beer.abv > 6
    })

    const classicBeers = originalBeerArr.filter(beer => {
        const beerFirstBrewingDate = beer.first_brewed.split('/')[1]
        return beerFirstBrewingDate < 2010
        }) 

     const acidicBeers = originalBeerArr.filter(beer => {
        return beer.ph < 4
        })

    // useEffect(() => {
    //     if (isHighABV ===true && isClassic===false && isAcidic===false) {
    //  fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //                 beers.filter(beer => {beer.abv>6})
    //                 setBeerArr(beers) 
    //          })
    //     } else if (isHighABV ===false && isClassic===true && isAcidic===false) {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //               beers.filter(beer => {
    //         beer.first_brewed.split('/')[1] > 2010}) 
    //         setBeerArr(beers)
    //         }) 
    //     } else if (isHighABV ===false && isClassic===false && isAcidic===true) {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //               beers.filter(beer => {
    //          beer.ph>4}) 
    //          setBeerArr(beers)
    //          })
    //     } else if (isHighABV ===true && isClassic===true && isAcidic===false) {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //               beers.filter(beer => {
    //          beer.abv>6 && beer.first_brewed.split('/')[1] > 2010}) 
    //          setBeerArr(beers)
    //          })
    //     } else if (isHighABV ===true && isClassic===false && isAcidic===true) {
    //     fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //               beers.filter(beer => {
    //          beer.abv>6 && beer.ph > 4}) 
    //          setBeerArr(beers)
    //          })
    //     } else if (isHighABV ===false && isClassic===true && isAcidic===true) {
    //   fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //               beers.filter(beer => {
    //          beers.first_brewed.split('/')[1] > 2010 && beer.ph > 4}) 
    //          setBeerArr(beers)
    //          })
    //     } else {
    //       fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //             .then(response => response.json())
    //             .then(beers => {
    //         setBeerArr(beers)
    //     })
    //     }
    // },[isHighABV, isClassic, isAcidic])

    
    useEffect(() => {
        if (isHighABV ===true && isClassic===false && isAcidic===false) {
            setBeerArr(highABVBeers)
        } else if (isHighABV ===false && isClassic===true && isAcidic===false) {
            setBeerArr(classicBeers)
        } else if (isHighABV ===false && isClassic===false && isAcidic===true) {
            setBeerArr(acidicBeers)
        } else if (isHighABV ===true && isClassic===true && isAcidic===false) {
            const highABVClassic = highABVBeers.filter(beer => classicBeers.includes(beer))
            setBeerArr(highABVClassic)
        } else if (isHighABV ===true && isClassic===false && isAcidic===true) {
            const highABVAcidic = highABVBeers.filter(beer => acidicBeers.includes(beer))
            setBeerArr(highABVAcidic)
        } else if (isHighABV ===false && isClassic===true && isAcidic===true) {
            const classicAcidic = classicBeers.filter(beer => acidicBeers.includes(beer))
            setBeerArr(classicAcidic)
        } else {
            setBeerArr(originalBeerArr)
        }
    },[isHighABV, isClassic, isAcidic])

    // useEffect(() => {
    //     if (isClassic===true) {
            
    //         setBeerArr(classicBeers)
    //     } else {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //         .then(response => response.json())
    //         .then(beers => {
    //             setBeerArr(beers)
    //         })
    //     }
    //     // eslint-disable-next-line
    // },[isClassic])

    // useEffect(() => {
    //     if (isAcidic===true) {
    //         const acidicBeers = beerArr.filter(beer => {
    //             return beer.ph < 4
    //             })
    //         setBeerArr(acidicBeers)
    //     } else {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //         .then(response => response.json())
    //         .then(beers => {
    //             setBeerArr(beers)
    //         })
    //     }
    //     // eslint-disable-next-line
    // },[isAcidic])
    
    // useEffect(() => {
    //     if (isHighABV===true) {
    //         setBeerArr(highABVBeers)
    //     } else {
    //         fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    //         .then(response => response.json())
    //         .then(beers => {
    //             setBeerArr(beers)
    //         })
    //     } 
    //     // eslint-disable-next-line
    // }, [isHighABV])

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