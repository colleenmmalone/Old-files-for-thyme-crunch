import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css'
import LunchCards from '../../cards/LunchCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';

function Lunch() {
    return (
        <>
        <Navbar/>
        
        <Search title="Lunch" />

        <center>
            <LunchCards/>
        </center>

        <RecipeButton/>
        </>
    )
}

export default Lunch
