import React from 'react'
import "./Header.css"
import { FaCartPlus, FaUserAlt } from 'react-icons/fa';
import logo from './logo2.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi"
import { HiOutlineLogout } from "react-icons/hi"

const Header = () => {
  const handleClose = () => {
    window.localStorage.clear();
    window.LocalStorage.removeItem('persist:root')
  };

  return (
    <div className='header'>
      <ul>
        <Link to="/"><li><img src={logo} alt="logo" className='logo' /></li></Link>
        <li className='menu-item'>Mac</li>
        <Link to="/product"><li className='menu-item'>IPHONE</li></Link>
        <li className='menu-item'>IPAD</li>
        <li className='menu-item'>ACCESSORY</li>
        <li><FaCartPlus size={25} style={{ fill: 'black' }} /></li>
        <li>{localStorage.getItem("token") ? <Link to="/profil">
          <FaUserAlt size={22} style={{ fill: 'black' }} /></Link> : null}</li>
        <li>
          {localStorage.getItem("token") ?

            (<Link to="/"><div style={{ display: "flex" }}>
              {/* <BiLogOut onClick={handleClose} size={25} style={{ fill: 'black' }}/> */}
              <p className='Log' onClick={handleClose}>LogOut</p>
            </div></Link>)
            : (<Link to="/login"><div style={{ display: "flex" }}><HiOutlineLogout size={25} style={{ fill: 'black' }} /><p className='Log'>LogIn</p></div></Link>)}

        </li>
      </ul>

    </div>
  )
}

export default Header