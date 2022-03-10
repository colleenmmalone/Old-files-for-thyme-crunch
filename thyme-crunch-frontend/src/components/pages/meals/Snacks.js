import React from 'react'
import Navbar from '../../navbar/Navbar'
import '../../../App.css'
import SnacksCards from '../../cards/SnacksCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';
function Snacks() {
    return (
        <>
        <Navbar/>

        <Search title="Snacks" />

        <center>
            <SnacksCards/>
        </center>
        
        <RecipeButton/>
        </>
    )
}

export default Snacks
