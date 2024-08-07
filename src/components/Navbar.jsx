import logo from '../assets/images/logo.png'
import { navLinksdata } from '../constants'
import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <div className={`md:w-full md:flex md:justify-between md:h-24 ${!showMenu?'h-24':''} sticky top-0 z-50 bg-[#212428]  opacity-90 mx-auto border-b-[1px] p-5 border-gray-600`}>
    <div className='flex md:w-full items-center md:gap-2 justify-between md:justify-normal'>
        <div className='flex items-center gap-5 w-1/3 justify-between'>
        <img src={logo} alt="" className='rounded-full w-[65px] border border-[#606161]'/>
        <h1 className='font-semibold text-xl blur-[.4px] hover:text-[#ff014f] text-gray-400'>ARCHANA</h1>
        </div>
    <div className='md:hidden '>
    <GiHamburgerMenu onClick={handleMenu} className='text-white' size={30}/>
    </div>
    </div>
    <div className='md:flex items-center my-8'>
      
        <ul className={`md:flex items-center gap-10 ${!showMenu? 'hidden h-24':'bg-[#212428]  text-white '} justify-center  align-middle py-5`}>
            
                {navLinksdata.map(({_id, title, link})=>(
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300' key={_id}>
                        <Link activeClass='active' to={link}  spy={true} smooth={true} offset={-70} duration={500}>{title}</Link>
                    </li>
               ) )}
        </ul>
    </div>
    </div>
  )
}

export default Navbar
