import { footerLinks } from '@/Data/Data'
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg'
import { FcBriefcase } from 'react-icons/fc'

const Footer = () => {
  return (
    <div className='mt-20 pb-5 flex gap-5 justify-around'>
        <div className='w-1/4 flex flex-col gap-4'>
            <div className='flex gap-1 items-center text-gray-500'>
                <FcBriefcase className='h-6 w-6' />
                <div className='text-xl font-semibold'>
                    Job Board
                </div>
            </div>
            <div className='text-sm text-amber-500'> Job Portal with users, skill updates,
                job listings, and more.</div>
            <div className='flex gap-3 text-amber-400 [&>div]:bg-gray-700 [&>div]:p-2 [&>div]:rounded-full [&>div]:hover:bg-gray-600 [&>div]:cursor-pointer
            hover:[&>div]:bg-amber-300 [&>div]:duration-300'>
                <div><CgFacebook/></div>
                <div><CgInstagram/></div>
                <div><CgTwitter/></div>
            </div>
            <div className='text-gray-500 text-sm'>
                © 2023 Job Board. All rights reserved.
            </div>
        </div>
        {
            footerLinks.map((item, index) => <div key={index} className='w-1/4 flex flex-col gap-2'>
                <div>{item.title}</div>
                {
                    item.links.map((link, index) => <div key={index} className='text-gray-500 text-sm 
                    hover:text-amber-400 cursor-pointer duration-300 mb-1 hover:translate-x-2'>
                        {link}
                    </div>)
                }
            </div>)
        }
    </div>
  )
}

export default Footer