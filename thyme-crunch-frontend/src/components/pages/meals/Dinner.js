import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css';
import DinnerCards from '../../cards/DinnerCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';

function Dinner() {
    return (
        <>
        <Navbar/>
        
        <Search title="Dinner" />

        <center>
            <DinnerCards/>
        </center>

        <RecipeButton/>
        </>
    )
}

export default Dinner
