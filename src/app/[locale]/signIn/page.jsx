"use client";

import { Checkbox, Form, Input } from "antd";
import Image from "next/image";

import { useForm } from "react-hook-form";

import logo from "../../../../public/navbar/logo.png";
import { Link } from "@/i18n/routing";

const Page = () => {
  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    //   try {
    //     const response = await axiosUrl.post("/dashboard/login", values);
    //     if (response.status === 200) {
    //       localStorage.setItem("token", response.data.token);

    //       Swal.fire({
    //         title: "Login Successful!",
    //         text: "Welcome back!",
    //         icon: "success",
    //         confirmButtonText: "OK"
    //       });

    //       navigate("/");
    //     }
    //   } catch (error) {
    //     console.error("Login failed:", error.response?.data?.message || error.message);

    //     Swal.fire({
    //       title: "Login Failed",
    //       text: error.response?.data?.message || "Login failed. Please try again.",
    //       icon: "error",
    //       confirmButtonText: "Try Again"
    //     });
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // const onFinishFailed = (errorInfo) => {
    //   console.log("Failed:", errorInfo);

    //   Swal.fire({
    //     title: "Form Validation Failed",
    //     text: "Please fill all required fields correctly.",
    //     icon: "warning",
    //     confirmButtonText: "OK"
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
            <div className="bg-white  lg:w-[500px] md:px-16 px-5 py-16 rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Welcome back!
              </h2>
              <p className="pb-7">Please log in to continue access</p>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Email"
                    className="w-full px-4 py-2 border  rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </Form.Item>

                <div className="flex items-center justify-between mb-4">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox className="text-gray-700">Remember me</Checkbox>
                  </Form.Item>
                  <Link
                    href={"/signIn/forgetpass"}
                    className="text-sm text-[#2F799E] hover:underline focus:outline-none"
                  >
                    Forget password?
                  </Link>
                </div>

                <Form.Item>
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#2F799E] text-white rounded hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div>
            <div className="hidden lg:block">
              <div className="flex  justify-start items-center mt-20">
                <div>
                  <Image src={logo} width={300} height={200} alt="login" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
