import React from 'react';

import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, my name is <b>Yash Nema</b> and I am a B.Tech candidate in <b>Computer Science and Business Systems</b> (CSBS), with a strong foundation in core computing principles and a keen understanding of their applications within modern business environments. My academic background equips me with skills in software development, data management, and problem-solving, enabling me to approach technology challenges with both technical precision and business insight. I am passionate about creating efficient, user-focused solutions that drive value and innovation. As I prepare to transition into a professional role, I am eager to contribute my skills and knowledge to meaningful, impactful projects and continue building my expertise.. <br/><br/>
          
           
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      
    </>
  )
}

export default About