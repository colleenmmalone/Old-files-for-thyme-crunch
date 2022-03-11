import React from 'react'
import Navbar from '../../navbar/Navbar'
import '../../../App.css'
import BreakfastCards from '../../cards/BreakfastCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';

export default function Breakfast() {
    return (
        <>
        <Navbar/>
        
        <Search title="Breakfast"/>

        <center>
            <BreakfastCards/>
        </center>

        <RecipeButton/>
        </>
    )
}

