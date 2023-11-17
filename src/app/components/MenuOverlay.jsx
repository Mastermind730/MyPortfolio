import React from 'react'
import NavLink from './NavLink'


const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Home",
      path: "#home",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
const MenuOverlay = () => {
  return (
    
        <ul className='flex container   flex-col align-center  py-4 '>
                {navLinks.map((link,index)=>{
                    return(<li key={index}><NavLink href={link.path} title={link.title}/></li>)
                })}
            </ul>
    
  )
}

export default MenuOverlay