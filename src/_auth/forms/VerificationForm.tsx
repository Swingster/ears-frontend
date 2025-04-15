import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { verifyUser, resendVerification } from "@/services/authService";
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
    verificationCode: z.string().min(5, {
      message: "Invalid Code.",
    })
  })

const VerificationForm = () => {

  const { state } = useLocation(); // state.email passed from signup
  const email = state?.email;
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationCode: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (data) => {
    try {
      await verifyUser({ email, verificationCode: data.code });
      // Redirect to login or dashboard if successful
      navigate("/sign-in");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResend = async () => {
    try {
      await resendVerification(email);
      alert("Verification code sent!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
        <Form {...form}>
          <div className="flex justify-center rounded-2xl flex-col items-center min-h-screen px-10">
          <div className="bg-white px-6 py-8 rounded-xl w-full max-w-[420px] shadow-lg">
          <h2 className="h3-bold text-center mb-2 text-gray-800">Login to your Account</h2>
          <p className="text-gray-600 small-medium md:base-regular text-center mb-6">
          To continue please write the verification code sent to your email
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-2">
            <FormField
              control={form.control}
              name="verificationCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="base-medium justify-center items-center">Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      className="insert-box"
                      placeholder="L6g1H"
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
              Resend verification code
              <Link to="/resend-code" className="link">
              Click here
              </Link>
            </p>
            <p className="text-sm text-center text-gray-600">
              Don't have an Account?
              <Link to="/sign-up" className="link">
              Signup
              </Link>
            </p>
          </form>
          </div>
          </div>
        </Form>
  )
}

export default VerificationForm