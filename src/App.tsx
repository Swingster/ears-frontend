import { Routes, Route } from 'react-router-dom';
import Home from './_root/pages/Home';  
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import VerificationForm from './_auth/forms/VerificationForm';
import RootLayout from './_root/RootLayout';
import ResendVerificationCodeForm from './_auth/forms/ResendVerificationCodeForm';
import ForgotPasswordForm from './_auth/forms/ForgotPasswordForm';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />}/>
            <Route path="/sign-up" element={<SignupForm />}/>
            <Route path="/verification-code" element={<VerificationForm />}/>
            <Route path="/resend-code" element={<ResendVerificationCodeForm />}/>
            <Route path="/forgot-password" element={<ForgotPasswordForm />}/>
          </Route>
          
            <Route element={<RootLayout/>}>
              <Route index element={<Home />}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App
