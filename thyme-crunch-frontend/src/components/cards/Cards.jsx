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

function Card() {
    return (
        <div className='cards'>
            <div id="main-re">
                <div class="marquee">

                    <CardItem 
                        src='../images/breakfast-1.png'
                        text="Start your day with a healthy breakfast"
                        label= "Breakfast"
                        path="/breakfast"
                        />

                    <CardItem 
                        src='../images/lunch.jpg'
                        text="Power through with a delicious lunch"
                        label= "Lunch"
                        path="/lunch"
                        />

                    <CardItem 
                        src='../images/dinner.jpg'
                        text="Beat the clock with a speedy dinner"
                        label= "Dinner"
                        path="/dinner"
                        />

                    <CardItem 
                        src='../images/pink-pie.jpg'
                        text="Indulge your sweet tooth"
                        label= "Desserts"
                        path="/desserts"
                        />

                    <CardItem 
                        src='../images/snack.jpg'
                        text="Refuel with a tasty pick-me-up"
                        label= "Snacks"
                        path="/snacks"
                        />

                    <CardItem 
                        src='../images/drink.jpg'
                        text="Sip, ahhhhh, repeat"
                        label= "Beverages"
                        path="/beverages"
                        />
       
                    </div>
            </div>          
        </div>
    )
}

export default Card
