import { Button, TextInput } from '@mantine/core'

const Subscribe = () => {
  return (
    <div className="mt-20 mx-4 md:mx-20 py-6 px-4 bg-gray-100 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
  {/* Title */}
  <div className="text-2xl md:text-4xl text-gray-800 font-semibold text-center md:text-left">
    Subscribe to our <span className="text-indigo-600">Newsletter</span>
  </div>

  {/* Input + Button */}
  <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2 w-full md:w-auto shadow-inner border border-gray-300">
    <TextInput
      className="[&_input]:text-gray-800 [&_input]:placeholder-gray-400 font-medium"
      variant="unstyled"
      placeholder="Enter your email"
      size="xl"
    />
    <Button
      className="button ml-0 md:ml-auto"
      size="lg"
    >
      Subscribe
    </Button>
  </div>
</div>
  )
}

export default Subscribe