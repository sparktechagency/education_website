'use client';
import React, { useState } from "react";
import Videos from "../video/videos";
import Loading from "../Loading";
import { NoData } from "../NoData";
import { useGetOnlyArticleQuery } from "@/redux/Api/article";
import { ArticleCard } from "../video/ArticleCard";
import { Pagination } from "antd";

const BookMark = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const { data, isLoading, error } = useGetOnlyArticleQuery({page: currentPage,
    limit: pageSize,});
 
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
    return <div className="h-screen text-2xl flex justify-center items-center">Server Error Videos Bookmark: {error.message}</div>;
  }

  // Filter videos that are bookmarked
  const videos = (data?.data?.result || []).filter(
    (video) => video.isBookmark === true
  );

  return (
    <div>
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((videose, i) => (
            <div key={i}>
              <ArticleCard videose={videose}></ArticleCard>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg ">
          
         <NoData></NoData>
         
        </p>
      )}
      <div className="mt-4 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={data?.data?.meta?.total || 0}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
    </div>
  );
};

export default BookMark;