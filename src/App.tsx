import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './_root/pages/Home';  
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import VerificationForm from './_auth/forms/VerificationForm';
import RootLayout from './_root/RootLayout';
import ResendVerificationCodeForm from './_auth/forms/ResendVerificationCodeForm';
import ForgotPasswordForm from './_auth/forms/ForgotPasswordForm';
import ProfilePage from './_root/pages/Profile/ProfilePage';
import FindJobs from './_root/pages/FindJobs/FindJobs';
import FindTalent from './_root/pages/NavBar/FindTalent';
import UploadJob from './_root/pages/NavBar/UploadJob';
import AboutUs from './_root/pages/NavBar/AboutUs';


const App = () => {
  const token = localStorage.getItem("token");
  return (
    <main className="flex h-screen">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />}/>
            <Route path="/sign-up" element={<SignupForm />}/>
            <Route path="/verify-email" element={<VerificationForm />}/>
            <Route path="/resend-code" element={<ResendVerificationCodeForm />}/>
            <Route path="/forgot-password" element={<ForgotPasswordForm />}/>
          </Route>
          
            <Route element={<RootLayout/>}>
              {/*<Route index element={token ? <Home />: <Navigate to="/sign-in"/>}/>*/}
              <Route index element={<Home/>}/>
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/find-jobs" element={<FindJobs/>}/>
              <Route path="/find-talent" element={<FindTalent/>}/>
              <Route path="/upload-job" element={<UploadJob/>}/>
              <Route path="/about-us" element={<AboutUs/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App
