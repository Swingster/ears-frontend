import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Schema
const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })


const SignupForm = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
        <Form {...form}>
          <div className="flex justify-center rounded-2xl flex-col items-center min-h-screen px-10">
          <div className="bg-white px-6 py-8 rounded-xl w-full max-w-[420px] shadow-lg">
          <h2 className="h3-bold text-center mb-2 text-gray-800">Create an Account</h2>
          <p className="text-gray-600 small-medium md:base-regular text-center mb-6">
          Fill in the fields to get started
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium">Username</FormLabel>
                  <FormControl>
                    <Input
                      className="insert-box"
                      placeholder="e.g. johndoe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="insert-box"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium ">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="insert-box"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium ">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="insert-box"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-sm" />
                </FormItem>
              )}
            />
            <Button type="submit" className="submit-button">
              Sign Up
            </Button>
            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?
              <Link to="/sign-in" className="link">
              Login
              </Link>
            </p>
          </form>
          </div>
          </div>
        </Form>
  )
}

export default SignupForm
