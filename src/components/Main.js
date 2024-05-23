import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import tanish from '../assests/tanishportfolio.jpg'
import "./Main.css"

function Main() {
  return (
    <div>
        <div className='container'>
            <div className='about'>
                <div className='about-main'>
                    <h1>Full-Stack MERN</h1>
                    <h1>Developer 👋🏻</h1>
                </div>
                <div className='about-desc'>
                    <p>
                    Hi,I'm Tanish Sharma. A passionate Full-Stack MERN
                    </p>
                    <p>Developer based in Haryana,India. 📍</p>
                </div>
                <div>
                   <FaLinkedin className='link'/> <FaGithub className='link'/>
                </div>
            </div>
            <div className='photo'>
                <img src={tanish} alt="img"/>
            </div>
        </div>
        <div className='readmore'>
            <MdOutlineKeyboardDoubleArrowDown className='link readmore-link'/>
        </div>
    </div>
  )
}

export default Main