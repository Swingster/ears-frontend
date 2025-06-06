import Footer from '@/components/Footer/Footer'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="">
        <Topbar />
      </div>
        <main>
          <Outlet />
        </main>
        <Footer />  
    </div>
  )
}

export default RootLayout