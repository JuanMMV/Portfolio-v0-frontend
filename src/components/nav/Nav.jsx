import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#top" onClick={()=>setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav