import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { Menu } from "lucide-react"
import {
  IconHome,
  IconUser,
  IconSettings,
  IconLogout
} from "@tabler/icons-react"

const DropDown = () => {
    const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="w-6 h-6 text-gray-700" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-64 bg-white border-r border-gray-200 shadow-lg"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-indigo-600 text-xl font-bold">
            Navigation
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          {[
            { label: "Home", icon: <IconHome size={18} />, path: "/" },
            { label: "Profile", icon: <IconUser size={18} />, path: "/profile" },
            { label: "Settings", icon: <IconSettings size={18} />, path: "/settings" },
          ].map((item) => (
            <SheetClose asChild key={item.label}>
              <Button
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 px-2 py-2 rounded-md hover:bg-indigo-50 transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            </SheetClose>
          ))}

          <SheetClose asChild>
            <Button
              onClick={() => {
                localStorage.removeItem("token")
                navigate("/sign-in")
              }}
              className="mt-6 flex items-center gap-2 text-red-500 hover:underline px-2"
            >
              <IconLogout size={18} />
              <span>Logout</span>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default DropDown