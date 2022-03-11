import React from 'react';
import Navbar from '../../navbar/Navbar';
import '../../../App.css'
import DessertsCards from '../../cards/DessertsCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';

function Desserts() {
    return (
        <>
        <Navbar/>
        
        <Search title="Desserts"/>

        <center>
            <DessertsCards/>
        </center>
        
        <RecipeButton/>
        </>
    )
}

export default Desserts
