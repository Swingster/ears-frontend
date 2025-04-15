import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { loginUser } from "@/services/authService"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

// Schema
const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    })
  })

const SigninForm = () => {

  const navigate = useNavigate(); // ✅ hook from React Router
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);
      console.log("✅ Logged in:", res);
      
      // ✅ Redirect to homepage
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password");
    }
  };

  return (
        <Form {...form}>
          <div className="flex justify-center rounded-2xl flex-col items-center min-h-screen px-10">
          <div className="bg-white px-6 py-8 rounded-xl w-full max-w-[420px] shadow-lg">
          <h2 className="h3-bold text-center mb-2 text-gray-800">Login to your Account</h2>
          <p className="text-gray-600 small-medium md:base-regular text-center mb-6">
          Fill in the fields to get started
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium ">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="insert-box"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="insert-box"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-sm" />
                </FormItem>
              )}
            />
              
              {/* Submit Button */}
            <Button type="submit" className="submit-button">
              Log In
            </Button>
            <p className="text-sm text-center mt-2 text-gray-600">
              Don't have an account?
              <Link to="/sign-up" className="link">
              SignUp
              </Link>
            </p>
              <Link to="/forgot-password" className="link text-sm text-center">
              Forgot Password?
              </Link>
          </form>
          </div>
          </div>
        </Form>
  )
}

export default SigninForm