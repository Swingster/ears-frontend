import { Routes, Route } from 'react-router-dom';


const App = () => {
    return(
        <main className="flex h-screen">
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="/sign-in" element={<SigninForm/>}>
                <Route path="/sign-up" element={<SignupForm/>}>
            </Route>

            <Route element={<RootLayout/>}>
                <Route index element={<Home />}/>


            </Route>
        </Routes>
        </main>
    )
}

export default App