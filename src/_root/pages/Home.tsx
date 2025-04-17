import { useState } from "react";
import JobCard from "@/components/jobs/JobsCard";
import { mockJobs } from "@/data/mockJobs";
import Topbar from "@/components/shared/Topbar";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredJobs = mockJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="w-full min-h-screen bg-gray-50">
      <div className="">
      <Topbar 
      search={search} setSearch={setSearch}
      className="max-w-[420px] mx-auto" />
      </div>
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 text-dark-1">Available Job Postings</h1>

        <div className="grid gap-7">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-sm text-gray-500">No jobs match your search.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
