"use client";


import { useRouter } from "@/i18n/routing";
import { MdArrowBack } from "react-icons/md";

const Navigate = ({title}) => {
  const router = useRouter();
  return (
    <div>
      <div
        className=" flex items-center gap-2 text-[#2F799E] cursor-pointer"
        onClick={() => router.back()} // Navigate back to the 
      >
        <MdArrowBack />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Navigate;
