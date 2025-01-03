"use client";

import BaseUrl from "@/components/baseApi/BaseApi";
import { useGetSingleArticleQuery } from "@/redux/Api/article";
import Image from "next/image";
import { notFound } from "next/navigation";

const ArticleDetails = ({ params }) => {
  const { id } = params;

  const {
    data: apiResponse,
    isLoading,
    error,
  } = useGetSingleArticleQuery({ id });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching article data.</p>;
  }

  if (!apiResponse?.data) {
    return notFound();
  }

  const singleData = apiResponse.data;

  const calculateDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays > 0 ? `${differenceInDays} days ago` : "Today";
  };

  const constructImageUrl = (path) =>
    `${BaseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

  return (
    <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
      <h1 className="text-2xl font-bold my-6">{singleData.title}</h1>
      {singleData.article_images?.map((image, index) => (
        <img
          key={index}
          src={constructImageUrl(image)}
          alt={`Article Image ${index + 2}`}
          className="rounded-lg my-4"
        />
      ))}
      <div className="text-gray-700 my-4">
        <span className="text-gray-600 text-sm">
          Published: {calculateDaysAgo(singleData.createdAt)}
        </span>
      </div>
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: singleData.description }}
      />
    </div>
  );
};

export default ArticleDetails;
