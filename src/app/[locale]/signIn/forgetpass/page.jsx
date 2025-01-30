"use client";

import React from "react";
import { Form, Input, Button, message } from "antd";

import BaseUrl from "@/components/baseApi/BaseApi";
import { useLocale } from "next-intl";

const Page = () => {
  const [loading, setLoading] = React.useState(false);
  const locale = useLocale();

  const onFinish = (values) => {
    setLoading(true); // Disable button & show loading spinner

    const payload = { email: values.email };

    fetch(`${BaseUrl}/auth/forget-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          localStorage.setItem("userEmail", values.email);
          message.success(responseData.message || "Password reset link sent!");
          window.location.href = `/${locale}/signIn/forgetpass/otp`;
        } else {
          message.error(responseData.message || "Failed to send reset link.");
        }
      })
      .catch(() => {
        message.error("An unexpected error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false); // Re-enable button
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center md:pt-0 px-4 justify-center bg-[#2F799E]">
      <div className="w-full">
        <div className="gap-5">
          <div className="lg:flex lg:justify-center">
            <div className="bg-white lg:w-[500px] px-5 py-16 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Forget Password
              </h2>

              <Form
                name="forgetPassword"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Invalid email address" },
                  ]}
                >
                  <Input className="w-full px-4 py-2 border  rounded-md" placeholder="Enter your Email" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full py-5 bg-[#2F799E] text-white"
                    loading={loading} // Ant Design's loading spinner
                    block // Makes button full width
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
