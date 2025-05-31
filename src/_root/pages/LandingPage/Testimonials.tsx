import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "@/Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
  {/* Section Title */}
  <div className="text-3xl text-gray-800 text-center mb-3 font-semibold">
    What <span className="text-indigo-600">Users</span> say about us
  </div>

  {/* Testimonials */}
  <div className="flex justify-evenly flex-wrap gap-6">
    {testimonials.map((data, index) => (
      <div
        key={index}
        className="flex flex-col gap-3 w-full sm:w-[30%] md:w-[25%] border border-gray-200 bg-white shadow-sm p-5 rounded-2xl mt-10 hover:shadow-md transition"
      >
        {/* User Header */}
        <div className="flex gap-3 items-center">
          <Avatar
            className="!h-14 !w-14"
            src="/assets/Avatar.png"
            alt="User Avatar"
          />
          <div>
            <div className="text-base font-semibold text-gray-800">
              {data.name}
            </div>
            <Rating value={data.rating} fractions={2} readOnly />
            <div className="text-sm text-gray-500">{data.position}</div>
          </div>
        </div>

        {/* Feedback */}
        <div className="text-sm text-gray-600 text-center">{data.feedback}</div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Testimonials;