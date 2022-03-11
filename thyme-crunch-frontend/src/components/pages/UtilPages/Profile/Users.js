import FirstNavbar from "../../../navbar/FirstNavbar"
import { UserProfiles } from "../Profile/UserProfiles";
import '../Recipe/UserRecipes.css'
import React from "react";

function Users(){

 return(
   <>
    <FirstNavbar/>
    <div id="maindiv">
    <UserProfiles/>
    </div>
   </>
)
 }

 export default Users;