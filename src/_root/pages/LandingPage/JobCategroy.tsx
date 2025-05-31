import { JobCategories } from '@/Data/Data';
import { Carousel } from '@mantine/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const JobCategroy = () => {
  return (
    <div className="mt-20 pb-5">
  {/* Section Title */}
  <div className="text-3xl text-gray-800 text-center mb-3 font-semibold">
    Browse <span className="text-indigo-600">Categories</span>
  </div>

  {/* Subtitle */}
  <div className="text-lg mx-auto mb-10 text-center text-gray-600 w-full md:w-1/2">
    Explore diverse job categories and find the perfect fit for your skills and interests.
  </div>

  {/* Carousel */}
  <Carousel
    slideSize="22%"
    emblaOptions={{
      loop: true,
      dragFree: false
    }}
    className="focus-visible:[&_button]:!outline-none 
               [&_button]:!bg-indigo-500 
               [&_button]:!border-none 
               [&_button]:hover:opacity-75 
               [&_button]:opacity-0 
               hover:[&_button]:opacity-100"
    nextControlIcon={<ArrowRight className="h-8 w-8 text-white" />}
    previousControlIcon={<ArrowLeft className="h-8 w-8 text-white" />}
  >
    {JobCategories.map((category, index) => (
      <Carousel.Slide key={index}>
        <div className="flex flex-col w-50 px-3 items-center mx-2 gap-2 border border-gray-300 bg-white p-4 rounded-xl
                        hover:cursor-pointer hover:shadow-md hover:shadow-indigo-300 transition-all duration-300 ease-in-out">
          {/* Icon Bubble */}
          <div className="p-3 bg-indigo-500 rounded-full">
            <img className="h-10 w-10" src={`/category/${category.name}.png`} alt={category.name} />
          </div>

          {/* Category Title */}
          <div className="text-gray-800 text-center text-lg font-semibold">
            {category.name}
          </div>

          {/* Description */}
          <div className="text-sm text-center text-gray-500">
            {category.desc}
          </div>

          {/* Jobs Available */}
          <div className="text-indigo-600 text-center text-sm font-medium">
            {category.jobs}+ new job postings
          </div>
        </div>
      </Carousel.Slide>
    ))}
  </Carousel>
</div>
  )
}

export default JobCategroy