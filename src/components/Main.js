import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
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
                    Hi,I'm Himanshu. A passionate Full-Stack MERN
                    </p>
                    <p>Developer based in Haryana,India. 📍</p>
                </div>
                <div>
                   <FaLinkedin className='link'/> <FaGithub className='link'/>
                </div>
            </div>
            <div className='photo'>
                <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzk5dHFiNmpnOWllOWw5cnhhOWdvMHc4b2NjejVvMHl4OHN1Ynd4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u3IfbLCYcN8G0GSraL/giphy.gif' alt="img"/>
            </div>
        </div>
        <div className='readmore'>
            <MdOutlineKeyboardDoubleArrowDown className='link readmore-link'/>
        </div>
    </div>
  )
}

export default Main