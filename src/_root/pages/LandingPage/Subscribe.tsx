import { Button, TextInput } from '@mantine/core'

const Subscribe = () => {
  return (
    <div className='mt-20 flex items-center bg-gray-400 mx-20 py-3 rounded-xl
    justify-around'>
        <div className='text-4xl text-gray-800 font-semibold'>
            Subscribe to our <span className='text-amber-400'>Newsletter</span>
        </div>
        <div className='flex items-center gap-4 rounded-xl bg-gray-400 px-3 py-2'>
            <TextInput 
            className='[&_input]:text-gray-100 font-semibold'
            variant='unstyled'
            placeholder='Enter your email'
            size='xl'
            />
            <Button className='!rounded-lg'
            size='lg'
            color='amber'
            variant='filled'>
                Subscribe
            </Button>
        </div>
    </div>
  )
}

export default Subscribe