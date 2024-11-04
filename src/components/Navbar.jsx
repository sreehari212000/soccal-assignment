import React from 'react'
import LOGO from "../assets/bms.png"
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoTicketOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import MobileNavIcon from './MobileNavIcon';


const Navbar = ({setSearchterm, fetchFromAPI}) => {
  return (
    <div>
        <div className='mx-16 md:mx-5 xl:mx-64 mt-3 hidden md:flex justify-between items-center'>
            <div className='flex items-center gap-5 xl:w-2/3'>
                <img src={LOGO} alt="" className='w-28'/>
                <div className='flex items-center border p-1 gap-3 w-[60%] px-3'>
                    <GoSearch /> 
                    <input type="text" onChange={e => setSearchterm(e.target.value)} required placeholder='Search for Movies, Events, Plays, Sports and Activities' className='outline-none w-full placeholder:text-sm'  />
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <p className='text-base'>Gurugram</p>
                <IoIosArrowDown className='font-light' color='gray'/>
                <button className='py-1 px-3 bg-[#F84464] text-white rounded-md text-sm cursor-pointer shrink-0'>Sign in</button>
                <RxHamburgerMenu size={25} color='gray' className='cursor-pointer'/>
            </div>
        </div>
        <div className='md:hidden flex px-2 bg-white justify-around border-t py-2 fixed bottom-0 w-full  min-w-[350px]'>
            <MobileNavIcon Icon={IoHomeOutline} title={"Home"}/>
            <MobileNavIcon Icon={IoTicketOutline} title={"Movies"}/>
            <MobileNavIcon Icon={IoVideocamOutline} title={"Live Events"}/>
            <MobileNavIcon Icon={CgProfile} title={"Profile"}/>
        </div>
    </div>
  )
}

export default Navbar