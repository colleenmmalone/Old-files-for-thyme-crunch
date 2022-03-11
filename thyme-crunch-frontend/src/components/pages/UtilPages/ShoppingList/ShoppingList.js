import React from "react";
import Navbar from "../../../navbar/Navbar"
import './ShoppingList.css';
import {ShoppingListConst} from "./ShoppingIngApi";

function ShoppingList(){
   
 return(
   <>
    <Navbar/>
    <div id="body">
        <div id="main">
            <div class="container">
            <div id="groceries">
                <div id="title">
                <h2>Grocery List</h2>
                </div>
                <div id="input">
                <i id="pencil" class="fas fa-pencil-alt"></i>
                <input id="user_input" placeholder="Add item"/>
                </div>
                <div id="all_items">
                <ShoppingListConst/>            
                </div>
                <br/>
                <br/>
                <div id="Shoping-button">
                    <button id="button1">Email The List</button>
                </div>
                </div>
            </div>
            </div>
        </div>
   </>
)
 }

 export default ShoppingList;