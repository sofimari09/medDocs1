import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import 'primeicons/primeicons.css';
import { FaBook, FaBookMedical, FaShoppingCart } from 'react-icons/fa';
import { IoMdSearch, IoMdAdd } from 'react-icons/io'; 
import {CgProfile} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";
import {BiLogIn, BiLogOut} from "react-icons/bi";


const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false); 
   
   
  return (
    <div>
        <nav className='navbar'>
            <h3 className='logo'>medDocs</h3>
            <ul className='nav-links'>
               
                  
               
                
                
                <Link to='/profile' className='profile'>
                  <CgProfile/>
                </Link>
                <Link to='/login' className='login'>
                <BiLogIn/>
                </Link>

            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links-web'}
            onClick={()=> setIsMobile(false)}>
                <Link to='/home' className='home'>
                <li> <FaBookMedical />  Документи</li>
                </Link>

                <Link to='/' className='search'>
                <li> <IoMdSearch/>  Пошук</li>
                </Link>

                <Link to='/newrecipe' className='newrecipe'>
                <li> <IoMdAdd/>  Новий документ</li>
                </Link>
                 
                <Link to='/logout' className='logout'>
                <li> <BiLogOut/>  Вихід </li>
                </Link>


                </ul>
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (<i className='pi pi-times'></i> )
                :
                ( <GiHamburgerMenu/>)
                }
            </button>

        </nav>
    </div>
  )
}

export default NavBar;