"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import profile from '../../../public/article/profile.png'
import Image from "next/image";
import BookMark from "./BookMark";
import ArticleBookmark from "./ArticleBookmark";
import Link from "next/link";
const PersonalProfile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // Tab state
  const [activeTab, setActiveTab] = useState("personalInfo");

  return (
    <div className="max-w-[1400px] m-auto px-4 lg:px-0 mb-20">
      {/* Tab navigation */}
      <div className="flex space-x-4 pb-2 mb-4 mt-4">
        <button
          className={`${
            activeTab === "personalInfo" ? " border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("personalInfo")}
        >
          Personal Info
        </button>
        <button
          className={`${
            activeTab === "bookMark" ? "border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActiveTab("bookMark")}
        >
          Book Mark
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "personalInfo" && (
        <div className="max-w-[700px] m-auto mt-20">
            <div className="flex justify-center">
        <Image className="rounded-full" src={profile} width={100} height={100} alt="profile"/>
            </div>

            <div className="text-center">
            <p className="font-semibold mt-1">Ian</p>
            <p>ian@gmail.com</p>
            </div>

          <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
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
            <Link href={'/editprofile'}><input
              className="bg-[#2F799E] cursor-pointer px-11 py-1  text-white rounded mt-6"
              type="submit" value='Update'
            /></Link>
            </div>
          </form>
        </div>
      )}

      {activeTab === "bookMark" && (
        <div>
            <h1 className="text-[#3f8cb3] text-2xl pb-2 font-semibold">Vedio's</h1>
          <BookMark></BookMark>
          <h1 className="text-[#3f8cb3] text-2xl pb-2 pt-5 font-semibold">Article</h1>
          <ArticleBookmark></ArticleBookmark>
        </div>
      )}
    </div>
  );
};

export default PersonalProfile;
