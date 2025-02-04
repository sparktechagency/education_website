import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image"; // Importing Next.js Image component
import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
import hero from "../../../public/home/hero1.png"; // This import is now compatible with Next.js

const Hero = () => {
  const h = useTranslations("hero");
  return (
    <div>
      <div
        className="relative bg-cover bg-center md:h-[80vh] h-[500px] -mt-[1px]"
        style={{
          width: "100%",
        }}
      >
        {/* Use the Next.js Image component */}
        <Image
          src={hero}
          alt="Hero Image"
          layout="fill" // This makes the image fill its container
          objectFit="cover" // Ensures the image covers the area without distortion
          objectPosition="center" // Center the image
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:px-32">
          <h1 className="text-4xl font-bold md:text-5xl">
            {h("Education is the most powerful weapon which you can use to change the world")}
          </h1>
          <p className="mt-4 text-lg md:text-2xl">– Nelson Mandela</p>
          <Link href={"/video"}>
            <button className="flex bg-[#DBE3EA] text-black rounded-md px-7 py-2 items-center gap-2 text-xl mt-9 hover:bg-[#2F799E] hover:text-white transition">
              {h("View Video")} <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
