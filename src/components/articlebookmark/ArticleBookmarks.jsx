import { Link } from "@/i18n/routing";
import Image from "next/image";

import { FaBookmark } from "react-icons/fa6";

const ArticleBookmarks = ({ videose }) => {
  return (
    <div>
      <Link href={`/articlebookdetails/${videose.id}`}>
        <div className="relative">
          <Image
            src={videose.thumbnail}
            alt={videose.title}
            width={100}
            height={100}
            className="w-full h-90 object-cover"
          />
          
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

export default ArticleBookmarks;
