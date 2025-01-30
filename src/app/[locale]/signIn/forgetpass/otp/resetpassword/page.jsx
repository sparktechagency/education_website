"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import BaseUrl from "@/components/baseApi/BaseApi"; // Replace with your Base API path
import { useLocale } from "next-intl";
import { toast } from "sonner";

const Page = () => {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const email = localStorage.getItem("userEmail"); // Retrieve the email from localStorage
    if (!email) {
      message.error("Email not found. Please restart the reset process.");
      return;
    }

    const payload = {
      email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    setLoading(true); // Start loading

    try {
      const response = await fetch(`${BaseUrl}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        toast.success(responseData.message );
        console.log("Response Data:", responseData);

        // Save tokens to localStorage
        localStorage.setItem("accessToken", responseData.data.accessToken);
        localStorage.setItem("refreshToken", responseData.data.refreshToken);

        // Redirect to login or dashboard
        window.location.href = `/${locale}/signIn`; // Update URL as needed
      } else {
        toast.error(responseData.message || "Failed to reset password.");
        console.error("Error:", responseData);
      }
    } catch (error) {
      message.error("An unexpected error occurred. Please try again later.");
      console.error("Unexpected Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="items-center px-4 justify-center flex min-h-screen bg-[#2F799E]">
      <div>
        <div className="bg-white lg:w-[500px] lg:px-16 px-5 py-16 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Set a new password
          </h2>
          <h3 className="text-[#333333] text-center mb-5">
            Create a new password. Ensure it differs from previous ones for security.
          </h3>
          <Form
            name="reset-password"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please set your password!" },
                { min: 8, max: 10, message: "Password must be 8-10 characters long!" },
              ]}
            >
              <Input.Password className="w-full px-4 py-2 border  rounded-md" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("The two passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password className="w-full px-4 py-2 border  rounded-md" placeholder="Re-enter your password" />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="w-full py-5 bg-[#2F799E] text-white"
                loading={loading} // Show loading spinner when submitting
              >
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
