import Companies from "./LandingPage/Companies";
import JobCategroy from "./LandingPage/JobCategroy";
import LandingPage from "./LandingPage/LandingPage";
import Subscribe from "./LandingPage/Subscribe";
import Testimonials from "./LandingPage/Testimonials";

const Home = () => {
  return (
  <div>
    <LandingPage />
    <Companies/>
    <JobCategroy/>
    <Testimonials/>
    <Subscribe />
  </div>
  )
};

export default Home;
