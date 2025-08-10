"use client";
import React, { useState } from "react";

import Navigate from "@/components/navigate/Navigate";
import { useLocale, useTranslations } from "next-intl";
import { useGetVideosQuery } from "@/redux/Api/videoApi";
import Loading from "@/components/Loading";
import { NoData } from "@/components/NoData";
import Videos from "@/components/video/videos";
import { Pagination } from "antd";
// import Videos from "@/components/video/Videos";
// Import the NoData component

const page = () => {
  const [searchTerm, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const pageSize = 10;
   const locale = useLocale();
   const selectedLanguage = locale === "en" ? "ENGLISH" : "SPANISH";
  const {
    data: videoData,
    isLoading,
    error,
  } = useGetVideosQuery({ searchTerm, page: currentPage, limit: pageSize, language: selectedLanguage });
  console.log(videoData);
  const videos = videoData?.data?.result || [];

  const m = useTranslations("hero");
  const p = useTranslations("profile");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <p className="h-screen">
        <Loading />
      </p>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredVideos = videos.filter(
    (video) => video.language === selectedLanguage
  );

  return (
    <div className="max-w-[1400px] px-4 lg:px-4 m-auto mb-20">
      <div className="md:flex items-center gap-2 my-5 md:mb-11 ">
        <div className="md:w-[20%] mb-2 md:mb-0">
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
              className="order-2  text-left placeholder-transparent bg-transparent grow pr-14"
              placeholder="Search"
            />
            <span className="absolute text-white pointer-events-none right-3">
              {m("search")}
            </span>
          </label>
        </div>
      </div>

      {videos?.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {videos?.map((videose, i) => (
            <div key={i}>
              <Videos videose={videose}></Videos>
            </div>
          ))}
        </div>
      ) : (
        <NoData /> // Render the NoData component when no videos are found
      )}

      <div className="mt-4 flex justify-center mb-11">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={videoData?.data?.meta?.total || 0}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default page;
