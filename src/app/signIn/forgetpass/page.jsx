"use client";
import { useForm } from "react-hook-form";

import Image from "next/image";
import logo from "../../../../public/navbar/logo.png";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center  md:pt-0 px-4 justify-center bg-[#2F799E]">
      <div className="  w-full max-w-[1500px] m-auto">
        <div className="lg:grid lg:grid-cols-2 gap-5">
          <div className="lg:flex lg:justify-end">
            <div className="bg-white md:w-[500px] md:px-16 px-5 py-16 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Forget Password
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-8">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border bg-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                

                <button
                  type="submit"
                  className="w-full py-2 bg-[#2F799E] text-white rounded hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block">
        <div className="flex justify-start  items-center">
          <div>
            <Image src={logo} width={300} height={200} alt="login" />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
