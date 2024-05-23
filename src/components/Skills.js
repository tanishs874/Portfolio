

import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { DiJavascript, DiMysql, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiExpress, SiMongodb, SiMongoose, SiPrisma, SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <div className='container3' id='skills'>
      <div className='skillheading'>
        <h2>TECH STACK</h2>
      </div>
      <div className='skillsection'>
        <div>
          <h3>Frontend</h3>
          <div className='skillsection-1'>
            <div className='slink' data-tip='HTML5'><FaHtml5 /></div>
            <div className='slink' data-tip='CSS3'><FaCss3 /></div>
            <div className='slink' data-tip='JavaScript'><DiJavascript /></div>
            <div className='slink' data-tip='TypeScript'><SiTypescript /></div>
            <div className='slink' data-tip='React'><FaReact /></div>
            <div className='slink' data-tip='Next.js'><FaNodeJs /></div>
            <div className='slink' data-tip='Bootstrap'><FaBootstrap /></div>
            <div className='slink' data-tip='Tailwind CSS'><SiTailwindcss /></div>
          </div>
        </div>
        <div>
          <h3>Backend</h3>
          <div className='skillsection-1'>
            <div className='slink' data-tip='Node.js'><FaNodeJs /></div>
            <div className='slink' data-tip='Express'><SiExpress /></div>
            <div className='slink' data-tip='MongoDB'><SiMongodb /></div>
            <div className='slink' data-tip='Mongoose'><SiMongoose /></div>
            <div className='slink' data-tip='MySQL'><DiMysql /></div>
            <div className='slink' data-tip='PostgreSQL'><DiPostgresql /></div>
            <div className='slink' data-tip='Prisma'><SiPrisma /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
