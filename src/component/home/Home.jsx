import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import NavBar from './NavBar'
import Body from './Body';

const Home = () => {
    const [search, setSearch] = useState('');
    ;

    // useEffect(() => {
    //     handleSearch()
    // }, [search, setSearch])

    const handleSearch = (value) => {
        setSearch(value);
        console.log(search);
    }
    return (
        <Box >
            <NavBar change={handleSearch} />
            <Body search={search} />
        </Box>
    )
}

export default Home