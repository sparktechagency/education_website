"use client";
import Videos from "@/components/video/videos";
import Navigate from "@/components/navigate/Navigate";
import { useTranslations } from "next-intl";
import { useGetVideosQuery } from "@/redux/Api/videoApi";
import { useState } from "react";
import Loading from "@/components/Loading";

const page = () => {
  const [searchTerm, setSearch] = useState("");
  const { data: videoData, isLoading, error } = useGetVideosQuery({ searchTerm });
  console.log(videoData);
  const videos = videoData?.data?.result || [];
  console.log(videos);

  const m = useTranslations("hero");
  const p = useTranslations("profile");

  if (isLoading) {
    // If data is still loading, display the loading component
    return <p className="h-screen"><Loading /></p>;
  }

  if (error) {
    // If there is an error, you can display an error message
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
      <div className="flex items-center gap-2 my-5 mb-11">
        <div className="md:w-[20%]">
          <Navigate title={`${p("All Videos")}`}></Navigate>
        </div>
        <div className="md:w-[60%]">
          <label className="input input-bordered rounded-sm flex items-center gap-2 bg-[#75BEE3] max-w-[900px] m-auto text-white relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="order-1 w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="order-2 text-left placeholder-transparent bg-transparent grow pr-14"
              placeholder="Search"
            />
            <span className="absolute text-white pointer-events-none right-3">
              {m("search")}
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((videose, i) => (
          <div key={i}>
            <Videos videose={videose}></Videos>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
