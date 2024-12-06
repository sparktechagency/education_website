import { Link } from "@/i18n/routing";
import Image from "next/image";

import { FaBookmark } from "react-icons/fa6";

const Videos = ({ videose }) => {
  return (
    <div>
      <Link href={`/videdetails/${videose.id}`}>
        <div className="relative">
          <Image
            src={videose.thumbnail}
            alt={videose.title}
            width={1000}
            height={100}
            className="w-full h-[250px] object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.482a1 1 0 00-1.555.832v6.964a1 1 0 001.555.832l5.197-3.482a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </Link>

      <div className="p-2 bg-[#2F799E] text-white">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold truncate">{videose.title}</h2>
          <p className="text-2xl">
            <FaBookmark />
          </p>
        </div>

        <div className=" gap-2 ">
          <div className=" text-sm text-gray-200 mt-2">
            <span>{videose.views}</span>
            <span>{videose.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
