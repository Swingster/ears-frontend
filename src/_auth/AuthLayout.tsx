import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/"/>
      ): (
        <section className="relative flex min-h-screen w-full bg-dark-1">
          {/* Background Image */}
          <img
            src="/src/assets/bg.jpg" 
            alt="auth background"
            className="absolute inset-0 md:block h-full w-full object-cover z-0"
          />

          {/* Gradient overlay (optional) */}
          <div className="absolute inset-0 bg-gradient-to-r md:block from-dark-1/90 via-dark-2/80 to-dark-3/70 z-0" />

          {/* Form Content */}
          <div className="relative z-10 flex w-full justify-center items-center px-4 py-10">
            <div className="w-full max-w-[420px]">
              <Outlet />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AuthLayout