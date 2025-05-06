import { useNavigate } from 'react-router-dom';
import useLogout from '../shared/useLogout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

const Dropdown = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
        const logout = useLogout();

        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 1200 && open) {
              setOpen(false);
            }
          };
          window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild className=''>
            <Button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 lg:hidden">
              <Menu className="w-4 h-4 text-gray-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-35 h-20">
            <DropdownMenuItem className="link-menu" onClick={() => navigate("/")}>Home</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            <DropdownMenuItem className='link-menu' disabled onClick={() => navigate("/profile")}>Profile</DropdownMenuItem>
            <DropdownMenuItem className='link-menu' disabled onClick={() => navigate("/settings")}>Account Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
            <DropdownMenuSubTrigger className='' disabled>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem disabled>Email</DropdownMenuItem>
                <DropdownMenuItem disabled>Message</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
            <DropdownMenuItem className="hover:scale-105 transition text-violet-600 hover:text-blue-700" onClick={logout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default Dropdown