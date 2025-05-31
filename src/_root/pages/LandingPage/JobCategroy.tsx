import { JobCategories } from '@/Data/Data';
import { Carousel } from '@mantine/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const JobCategroy = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-3xl text-gray-500 text-center mb-3 font-semibold'>
            Browse<span className='text-denim-50'> Categories</span>
        </div>
        <div className="text-lg mx-auto mb-10 text-center w-1/2 ">
            Explore diverse job categories and find the perfect fit for your skills and interests.
        </div>
        <Carousel slideSize="22%" emblaOptions={{
        loop: true,
        dragFree: false
      }} className='focus-visible:[&_button]:!outline-none [&_button]:!bg-amber-500 [&_button]:!border-none 
      [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100'

      nextControlIcon={<ArrowRight className='h-8 w-8' />}
      previousControlIcon={<ArrowLeft className='h-8 w-8' />}

    >{
        JobCategories.map((category, index) => <Carousel.Slide key={index}>
            <div className="flex flex-col w-50 px-3 items-center mx-2 gap-1 border border-gray-500 p-2 rounded-xl
            hover:cursor-pointer hover:shadow-[0_0_5px_2px_gray] my-2 !shadow-amber-500 transition-all duration-300 ease-in-out">
            <div className="p-2 bg-amber-500 rounded-full">
                <img className="h-10 w-10" src={`/category/${category.name}.png`} alt={category.name}/>
            </div>
            <div className="text-gray-400 text-center text-xl font-semibold">{category.name}</div>
            <div className="text-sm text-center text-gray-500"> {category.desc}</div>
            <div className="text-amber-500 text-center text-md">{category.jobs}+ new job postings</div>
        </div>
        </Carousel.Slide>)}
    </Carousel>
    </div>
  )
}

export default JobCategroy