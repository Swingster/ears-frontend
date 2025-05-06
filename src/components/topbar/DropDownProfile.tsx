import { useNavigate } from 'react-router-dom';
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
import { CgProfile } from 'react-icons/cg';

const DropDownProfile = () => {
    const navigate = useNavigate();

  return (
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CgProfile className='icon-button icon-button:hover flex items-center md:block hidden/>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-35 h-20">
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
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default DropDownProfile