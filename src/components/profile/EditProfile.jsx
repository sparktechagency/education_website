"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import profile from "../../../public/article/profile.png";
import Image from "next/image";

import ChangPassword from "./ChangPassword";

const EditProfile = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // Tab state
  const [activeTab, setActiveTab] = useState("personalInfo");

  return (
    <div className="max-w-[1400px] m-auto px-4 lg:px-0 pb-32">
      
      <div className="md:flex justify-center gap-11">
      <div>
        <div className="flex justify-center">
          <Image
            className="rounded-full"
            src={profile}
            width={100}
            height={100}
            alt="profile"
          />
        </div>

        <div className="text-center">
          <p className="font-semibold mt-1">Ian</p>
          <p>ian@gmail.com</p>
        </div>
      </div>
      {/* Tab navigation */}
      <div>
      <div className="flex space-x-4 pb-2  mt-11 mb-9">
        <button
          className={`${
            activeTab === "personalInfo" ? " border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("personalInfo")}
        >
          Edit Profile
        </button>
        <button
          className={`${
            activeTab === "bookMark" ? "border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("bookMark")}
        >
          Change Password
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "personalInfo" && (
        <div className=" ">
          <form className="bg-white p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="">Full Name</span>
              <input
                className="bg-white border py-2 px-1 border-neutral-300 w-full"
                {...register("fullName")}
                placeholder="John Cooper"
              />
            </label>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <label>
                <span className="">Email</span>
                <input
                  className="bg-white border py-2 px-1 border-neutral-300 w-full"
                  {...register("email")}
                  placeholder="ian@gmail.com"
                />
              </label>
              <label>
                <span className="">Phone Number</span>
                <input
                  className="bg-white border py-2 px-1 border-neutral-300 w-full"
                  {...register("phone")}
                  placeholder="+99 4543 34543 213"
                />
              </label>
            </div>

            <div className="mt-5">
              <label>
                <span className="">Adress</span>
                <input
                  className="bg-white border py-2 px-1 border-neutral-300 w-full"
                  {...register("additionalInfo")}
                  placeholder="Type Here"
                />
              </label>
            </div>
            <div className="flex justify-center mt-11">
              <input
                className="bg-[#2F799E] px-11 py-1 cursor-pointer  text-white rounded mt-6"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      )}

      {activeTab === "bookMark" && (
        <div className="">
          <ChangPassword></ChangPassword>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default EditProfile;
