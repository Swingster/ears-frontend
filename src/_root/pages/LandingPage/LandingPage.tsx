import { Button } from "@/components/ui/button"

const LandingPage = () => {
  return (
    <div className="flex items-center p-18">
  <div className="flex flex-col w-[45%] gap-3">
    <div className="text-5xl font-bold leading-tight text-indigo-600 [&>span]:text-black">
      Find your <span>Dream Job</span> with us
    </div>
    <div className="text-lg text-gray-700">
      Good life begins with a great company. Explore
      thousands of job opportunities with just one click
    </div>
    <div className="flex gap-3">
      <Button type="submit" className="button">
        Get Started
      </Button>
    </div>
  </div>
  <div className="w-[55%] flex items-center justify-center">
    <div className="w-[30rem]">
      <img src="/assets/front.gif" alt="" />
    </div>
  </div>
</div>

  )
}

export default LandingPage