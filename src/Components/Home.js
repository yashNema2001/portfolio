import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>YASH NEMA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
         <b> About Me</b><br/>
I am a dedicated software developer with a focus on backend development. I am passionate about building robust, scalable applications and optimizing performance to meet dynamic business needs. With a commitment to delivering efficient solutions, I thrive in complex technical environments and continuously seek to deepen my expertise.<br/>

<b>Skill Set</b><br/>
My core skills include <b>Java, Spring Boot, MySQL, Hibernate, and Servlet
</b> . With strong experience in backend frameworks and database management, I specialize in creating seamless integrations and reliable, high-performing systems.
     
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home