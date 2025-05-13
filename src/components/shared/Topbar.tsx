import useLogout from './useLogout';
import { Indicator } from '@mantine/core';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FcBriefcase } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';

import Dropdown from '../topbar/Dropdown';
import DropDownProfile from '../topbar/DropDownProfile';

const Topbar = () => {

  const logout = useLogout();
  const navigate = useNavigate();

    return (
        <header className="w-full flex justify-between px-3 py-2 items-center bg-white border-b border-gray-200 sticky top-0 z-10">
          {/* Logo or App Name (optional) */}
          <h1 className="gap-2 text-lg font-semibold text-dark-2 sm:block cursor-pointer flex lg:flex items-center"
          onClick={() => navigate("/")}>
           <FcBriefcase className='w-6 h-6'/> Job Board 
            </h1>

          {/* Navigation Links (optional) */}
          {NavLinks()}

          {/* Search Bar */}
         {/* <div className={`flex-1 ${className ?? ''} mx-4`}>
          <Input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-50"
          /> 
        </div>*/}
        
            {/* User Profile / Logout Button */}
            <div className="flex items-center gap-x-4">
              <Indicator  inline withBorder offset={14} processing color='red' size={12} 
              className=''>
                <MdOutlineNotificationsNone className='icon-button'/>
              </Indicator>
              <DropDownProfile/>
              <CiLogout 
                onClick={logout}
                className="icon-button icon-button:hover md:block hidden gap-x-4"
              />
            {/* Dropdown Menu */}
        <Dropdown/>
      </div>
      </header>
    );
  };

export default Topbar