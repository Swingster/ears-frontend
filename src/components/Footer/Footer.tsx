import { footerLinks } from '@/Data/Data'
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg'
import { FcBriefcase } from 'react-icons/fc'

const Footer = () => {
  return (
    <div className="mt-20 pb-10 bg-gray-50 text-gray-600 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 justify-around pt-10">
    {/* Brand Section */}
    <div className="w-full md:w-1/4 flex flex-col gap-4">
      <div className="flex gap-2 items-center text-indigo-600">
        <FcBriefcase className="h-6 w-6" />
        <div className="text-xl font-semibold text-gray-800">Job Board</div>
      </div>
      <p className="text-sm">
        Job Portal with users, skill updates, job listings, and more.
      </p>

      {/* Social icons */}
      <div className="flex gap-3 [&>div]:bg-indigo-100 [&>div]:p-2 [&>div]:rounded-full [&>div]:hover:bg-indigo-200 [&>div]:cursor-pointer [&>div]:transition">
        <div><CgFacebook className="text-indigo-600 w-5 h-5" /></div>
        <div><CgInstagram className="text-indigo-600 w-5 h-5" /></div>
        <div><CgTwitter className="text-indigo-600 w-5 h-5" /></div>
      </div>

      <div className="text-gray-400 text-xs mt-2">
        © 2023 Job Board. All rights reserved.
      </div>
    </div>

    {/* Footer Links */}
    {footerLinks.map((item, index) => (
      <div key={index} className="w-full md:w-1/5 flex flex-col gap-2">
        <div className="text-gray-800 font-semibold mb-2">{item.title}</div>
        {item.links.map((link, i) => (
          <div
            key={i}
            className="text-sm text-gray-500 hover:text-indigo-600 cursor-pointer transition duration-200 hover:translate-x-1"
          >
            {link}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
  )
}

export default Footer