import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

export default function DessertsCards() {

    // these cards have been modularized
    // please apply the <CardItem /> paradigm to all other pages
    // thanks, Colleen

    return (
        <div className='cards'>

                <CardItem 
                        src='../images/gelato.jpg'
                        text="Black Forest Gelato with Ganache"
                        label= "Gelato"
                        path="/gelato"
                        />

                <CardItem 
                        src='images/lemon_tart.jpg'
                        text="Lemon Tart"
                        label= "Lemon Tart"
                        path="/lemon-tart"
                        />

                <CardItem 
                        src='images/pavlova.jpg'
                        text= "Pretty Pavlova"
                        label= "Pavlova"
                        path="/pavlova"
                        />

        </div>
    )
}