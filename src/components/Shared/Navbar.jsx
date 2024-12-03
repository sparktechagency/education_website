"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/navbar/logo.png";
import language from "../../../public/navbar/language.png";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [activeLanguage, setActiveLanguage] = useState("Eng");
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Video",
      path: "/video",
    },
    {
      title: "Article",
      path: "/article",
    },
  ];

  return (
    <div className="flex justify-between items-center  px-4 lg:px-0">
      <div className="flex">
        <div className="lg:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <div className="mt-7">
              <label
                htmlFor="my-drawer"
                className=" text-3xl text-white"
              >
                
                <FaBars />
               
              </label>
              </div>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay z-50"
              ></label>
              <ul className="menu bg-black z-50 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                {navItems.map((item, index) => (
                  <div key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image src={logo} alt="logo" width={70} height={80} />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-20 text-white">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.path}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2">
        <div className="border border-white flex rounded">
          <div className="flex items-center p-1">
            <Image src={language} alt="language" width={23} height={20} />
          </div>
          <button
            onClick={() => setActiveLanguage("Eng")}
            className={`px-4 py-2 ${
              activeLanguage === "Eng" ? "bg-white text-[#2F799E]" : ""
            }`}
          >
            Eng
          </button>
          <button
            onClick={() => setActiveLanguage("Spa")}
            className={`px-4 py-2 ${
              activeLanguage === "Spa" ? "bg-white text-[#2F799E]" : ""
            }`}
          >
            Esp
          </button>
        </div>
        <div className="text-yellow-100 flex text-3xl justify-end mt-1 gap-2">
          <IoMdNotificationsOutline />
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
