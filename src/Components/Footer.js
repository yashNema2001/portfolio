import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Yash Nema</h4>
      <h4>Copyright &copy; 2024 YN</h4>
      <div className='footerLinks'>
        <a href="https://github.com/yashNema2001" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/yash-nema-215752232/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:yashnema0707@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/ya_nema2001/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer