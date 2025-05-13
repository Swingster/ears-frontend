import { JobCategories } from '@/Data/Data';
import { Carousel } from '@mantine/carousel';
const JobCategroy = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-3xl text-gray-500 text-center mb-3 font-semibold'>
            Browse<span className='text-denim-50'>Categories</span>
        </div>
        <div className="text-lg mx-auto mb-10 text-center w-1/2 ">
            Explore diverse job categories and find the perfect fit for your skills and interests.
        </div>
        <Carousel
      slideSize="22%"
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: 'center'
      }}
    >{
        JobCategories.map((category, index) => <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-20">
            <div className="p-1 bg-amber-500 rounded-full">
                <img src={`/category/${category.name}.png`} alt={category.name}/>
            </div>
            <div className="text-gray-400 text-xl font-semibold">{category.name}</div>
            <div className="text-sm text-center text-gray-500"> {category.desc}</div>
            <div className="text-amber-500 text-center text-md">{category.jobs}+ new job postings</div>
        </div>
        </Carousel.Slide>)}
    </Carousel>
    </div>
  )
}

export default JobCategroy