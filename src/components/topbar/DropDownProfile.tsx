import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const DropDownProfile = () => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CgProfile className="icon-button hover:scale-110 flex items-center md:block hidden cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-35 h-20 ">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="link-menu"
            onClick={() => navigate("/profile")}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="link-menu"
            onClick={() => navigate("/settings")}
          >
            Account Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="link-menu">Invite Users</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem disabled>Email</DropdownMenuItem>
              <DropdownMenuItem disabled>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownProfile;
