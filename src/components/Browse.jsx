import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './moviesList/MainContainer'
import SecondaryContainer from './moviesList/SecondaryContainer'



const Browse = () => {

    useNowPlayingMovies()

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
