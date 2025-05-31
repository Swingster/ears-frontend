import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const JobsCard = ({ job }) => {
  return (
    <Card className="w-full hover:shadow-md transition">
    <CardHeader>
      <CardTitle className="text-lg text-dark-1">{job.title}</CardTitle>
      <CardDescription className="text-sm text-muted-foreground">
        {job.department} • {job.location}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">{job.description.slice(0, 100)}...</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <span className="text-xs text-gray-400">Apply by: {job.deadline}</span>
      <button className="text-sm text-primary-600 hover:underline">View Details</button>
    </CardFooter>
  </Card>
  )
}

export default JobsCard