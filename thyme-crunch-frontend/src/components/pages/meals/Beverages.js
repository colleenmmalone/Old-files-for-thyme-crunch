import React from 'react'
import Navbar from '../../navbar/Navbar';
import '../../../App.css'
import BeveragesCards from '../../cards/BeveragesCards';
import Search from '../UtilPages/Search/Search';
import { RecipeButton } from '../../buttons/RecipeButton';

export default function Beverages() {
    return (
        <>
        <Navbar/>
        
        <Search title="Beverages"/>

        <center>
            <BeveragesCards/>
        </center>
        
        <RecipeButton/>
        </>
    )
}