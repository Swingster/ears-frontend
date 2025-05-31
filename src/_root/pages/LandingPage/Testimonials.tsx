import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "@/Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-3xl text-gray-500 text-center mb-3 font-semibold">
            What <span className="text-denim-50">Users</span> say about us
        </div>

    <div className="flex justify-evenly flex-wrap gap-4">
        {testimonials.map((data, index) => (
        <div
        key={index}
        className="flex flex-col gap-3 w-[23%] border-gray-400 border-2 p-3 px-1 py-1 rounded-2xl mt-10"
        >
        <div className="flex gap-2 items-center">
          <Avatar className="!h-14 !w-14" src="/assets/Avatar.png" alt="User Avatar" />
          <div>
            <div className="text-base font-semibold text-center text-gray-500">{data.name}</div>
            <Rating value={data.rating} fractions={2} readOnly />
            <div className="text-sm text-center text-gray-400">{data.position}</div>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center mb-3">{data.feedback}</div>
      </div>
    ))}
  </div>
</div>
        
  )
}

export default Testimonials;