import Marquee from 'react-fast-marquee';
import { companies } from "@/Data/Data";

const Companies = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-3xl text-center font-semibold'>
            Trusted by <span className='text-denim-50'>100+</span>Companies
        </div>
        <Marquee pauseOnHover={true} speed={50} className='mt-2'>
          {
          companies.map((company, index) => <div key={index} className="mx-8 px-2 py-1 hover:bg-amber-100 rounded-xl cursor-pointer">
              <img className="h-14" src={`/companies/${company}.png`} alt={company} />
            </div>)
    }
        </Marquee>
    </div>
  )
}

export default Companies