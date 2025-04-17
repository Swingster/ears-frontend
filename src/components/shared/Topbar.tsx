import { Input } from '../ui/input';
import Dropdown from '../TopbarComponents/Dropdown';
import useLogout from './useLogout';
import { CiLogout } from "react-icons/ci";
import DropDownProfile from '../TopbarComponents/DropDownProfile';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ search, setSearch, className }) => {

  const logout = useLogout();
  const navigate = useNavigate();

    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
          {/* Logo or App Name (optional) */}
          <h1 className="text-lg font-semibold text-dark-2 hidden sm:block cursor-pointer"
          onClick={() => navigate("/")}>
            Job Board
            </h1>
  
          {/* Search Bar */}
          <div className={`flex-1 ${className ?? ''} mx-4`}>
          <Input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>
            {/* User Profile / Logout Button */}
              <DropDownProfile 
              /><CiLogout 
                onClick={logout}
                className="icon-button icon-button:hover flex items-center md:block hidden gap-x-4"
              />
            {/* Dropdown Menu */}
        <Dropdown/>
      </div>
      </header>
    );
  };

export default Topbar