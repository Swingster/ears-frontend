import { useNavigate } from "react-router-dom";


const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 items-center">
            <a onClick={() => navigate("/find-jobs")} className="text-gray-700 hover:text-blue-500 text-s cursor-pointer">Find Jobs</a>
            <a onClick={() => navigate("/find-talent")} className="text-gray-700 hover:text-blue-500 text-s cursor-pointer">Find Talent</a>
            <a onClick={() => navigate("/upload-job")} className="text-gray-700 hover:text-blue-500 text-s cursor-pointer">Upload Job</a>
            <a onClick={() => navigate("/about-us")} className="text-gray-700 hover:text-blue-500 text-s cursor-pointer">About Us</a>
          </div>
  )
}

export default NavLinks