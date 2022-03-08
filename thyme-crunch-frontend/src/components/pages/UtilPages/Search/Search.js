import React from 'react'
import './Search.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Search(props) {

    const [recipes, setRecipes] = useState('');
    const navigate = useNavigate()

    function submit0(){
        const a = recipes
        axios.post(`http://3.14.3.79:9090/api/v1/recipes/all-recipes/${a}/`)
            .then(response =>{
                if(response.data ===true) { navigate(`/${recipes}`);}
                console.log(response.data);
            })
            .catch(err => {
                console.log("Error occured", err);
            })
    }

     return (
         <>
            <h1 id="recipe-title">{props.title}</h1>

            {/* <div className='ui_search'> */}
                <div className='ui_icon_input'>
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder='Search for a recipe' className='prompt' onChange={e => setRecipes(e.target.value)} />
                    <button id="serbutton"onClick={submit0}>Go</button>
                </div>
                
            {/* </div>  */}
         </>
            
     )
  
}
