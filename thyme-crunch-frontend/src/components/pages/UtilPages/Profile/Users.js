import Navbar from "../../../navbar/Navbar"
import { UserProfiles } from "../Profile/UserProfiles";
import '../Recipe/UserRecipes.css'
import React from "react";

function Users(){

 return(
   <>
    <Navbar/>
    <div id="maindiv">
    <UserProfiles/>
    </div>
   </>
)
 }

 export default Users;