import JobCard from "@/components/jobs/JobsCard";
import { mockJobs } from "@/Data/Data";
import { useState } from "react";
const FindJobs = () => {
  const [search] = useState("");

  const filteredJobs = mockJobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
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
  )
}

export default FindJobs