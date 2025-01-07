"use client";

import React from "react";
import { Form, Input, message } from "antd";
import { Link } from "@/i18n/routing";
import BaseUrl from "@/components/baseApi/BaseApi";

const page = () => {
  const onFinish = async (values) => {
    const payload = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      userData: {
        username: values.username,
        phone: values.phone,
        email: values.email,
      },
    };
  
    try {
      const response = await fetch(`${BaseUrl}/user/register-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const responseData = await response.json();
  
      if (response.ok && responseData.success) {
  
        alert('sucess')
        console.log("Success:", responseData);
      } else {
       
        message.error(responseData.message || "Registration failed");
        console.error("Error:", responseData);
      }
    } catch (error) {
 
      message.error("An unexpected error occurred. Please try again later.");
      console.error("Unexpected Error:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center  md:pt-0 px-4 justify-center bg-[#2F799E]">
      <div className="w-full lg:max-w-[1800px] lg:m-auto">
        <div className=" gap-5">
          <div className="lg:flex justify-center">
            <div className="bg-white lg:w-[500px] md:px-16 px-5 py-16 rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>

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
                  name="username"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Name"
                    className="w-full px-4 py-2 border rounded bg-white text-black"
                  />
                </Form.Item>

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
                    className="w-full px-4 py-2 border rounded bg-white text-black"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Contact Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Contact Number!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Contact"
                    className="w-full px-4 py-2 border rounded bg-white text-black"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please set your password!" },
                    {
                      min: 8,
                      max: 10,
                      message: "Password must be 8-10 characters long!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-md bg-white text-black"
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </Form.Item>

                <Form.Item>
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#2F799E] text-white rounded"
                  >
                    Submit
                  </button>
                </Form.Item>
              </Form>
              <span className="flex justify-center">
                already have an account?{" "}
                <Link href={"signIn"}>
                  <span className="text-blue-500"> Sign In</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
