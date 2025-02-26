import { useBookmarkArticleMutation } from "@/redux/Api/article";

import { useLocale } from "next-intl";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import BaseUrl from "../baseApi/BaseApi";
import moment from "moment";
import { Link } from "@/i18n/routing";
import { toast } from "sonner";

export const ArticleCard = ({ videose }) => {

  const locale = useLocale();
  const [addBookmark] = useBookmarkArticleMutation();

  const handleBookmark = async (id) => {
    try {
      const res = await addBookmark(id).unwrap();
      toast.success(res?.message);
      console.lg("Video bookmark successfully!");
    } catch (error) {
    
    }
  };

  return (
    <div>
      <Link href={`articleDetails/${videose._id}`}>
      <div className="">
        <img
          src={`${BaseUrl}/${videose?.article_images?.[0]}`}
          alt={videose.title}
          className="w-full h-[300px] object-cover"
        />
      </div></Link>

      <div className="p-2 bg-[#2F799E] text-white -mt-[1px]">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-bold truncate">{videose.title}</h2>
          <p
            onClick={() => handleBookmark(videose._id)}
            className="text-2xl cursor-pointer"
          >
            <FaBookmark
              style={{ color: videose.isBookmark === true ? "red" : "white" }}
            />
          </p>
        </div>

        <div className="gap-2">
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-200">
            <span>{videose.totalView} views</span>
            <span></span>
            <span>{moment(videose.createdAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
