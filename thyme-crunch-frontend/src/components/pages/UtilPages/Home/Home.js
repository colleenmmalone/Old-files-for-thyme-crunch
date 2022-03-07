import '../../../../App.css';
import VideoSection from '../../../videos/VideoSection';
// import Navbar from '../..//../Navbar';
import FirstNavbar from '../..//../FirstNavbar';
import React from "react";

function Home(){
    return (
        <>
        {/* <Navbar/> */}
        <FirstNavbar/>
        <VideoSection/>
        </>
    )
}
export default Home;