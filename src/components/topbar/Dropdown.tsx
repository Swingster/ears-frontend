import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const DropDown = () => {
    const navigate = useNavigate();

  return (
    <Sheet>
      {/* Button to open sidebar */}
      <SheetTrigger asChild>
        <button type="button" className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </SheetTrigger>

      {/* Sidebar content */}
      <SheetContent side="left" className="w-64 bg-white border-r">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Navigation</SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-3">
          <SheetClose asChild>
            <button
              onClick={() => navigate("/")}
              className="text-left text-sm text-gray-700 hover:text-primary-600"
            >
              Home
            </button>
          </SheetClose>

          <SheetClose asChild>
            <button
              onClick={() => navigate("/profile")}
              className="text-left text-sm text-gray-700 hover:text-primary-600"
            >
              Profile
            </button>
          </SheetClose>

          <SheetClose asChild>
            <button
              onClick={() => navigate("/settings")}
              className="text-left text-sm text-gray-700 hover:text-primary-600"
            >
              Settings
            </button>
          </SheetClose>

          <SheetClose asChild>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/sign-in");
              }}
              className="text-left text-sm text-red-500 hover:underline mt-4"
            >
              Logout
            </button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default DropDown