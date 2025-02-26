"use client";
import React from "react";
import BaseUrl from "@/components/baseApi/BaseApi";
import Loading from "@/components/Loading";
import {
  useGetShortArtilesQuery,
  useGetSingleArticleQuery,
} from "@/redux/Api/article";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";

const ArticleDetails = () => {
  const params = useParams();


  const {
    data: apiResponse,
    isLoading,
    error,
  } = useGetSingleArticleQuery({ id: params?.id });


  const { data: releted, isLoading: isRelatedLoading } =
    useGetShortArtilesQuery({
      category: apiResponse?.data?.category._id,
    },{skip: !apiResponse?.data?.category._id});

  const reletedData = releted?.data?.result || [];
 

  if (isLoading) {
    return (
      <p className="h-screen">
        <Loading />
      </p>
    );
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
  const extractTextWithoutImage = (html) => {
    // Create a temporary DOM element
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    // Remove the first <img> tag if it exists
    const firstImg = tempElement.querySelector("img");
    if (firstImg) {
      firstImg.remove();
    }

    // Return the remaining innerHTML
    return tempElement.innerHTML;
  };

  return (
    <div className="max-w-[1400px] px-4 lg:px-4 m-auto mb-20">
      
      <h1 className="my-7 text-2xl font-bold">{singleData.title}</h1>
      <div className="lg:grid grid-cols-5">
        <div className="lg:col-span-3">
          {singleData.article_images?.slice(0, 1)?.map((image, index) => (
            <img
              key={index}
              src={constructImageUrl(image)}
              alt={`Article Image ${index + 1}`}
              className="w-full my-4 h-[500px] rounded-lg"
            />
          ))}

          {/* <div className="my-4 text-gray-700">
            <span className="text-sm text-gray-600">
              Published: {calculateDaysAgo(singleData.createdAt)}
            </span>
          </div>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: singleData.description }}
          /> */}
        </div>

        <div className="mt-3 lg:ml-4 col-span-2 ">
          <div className="hidden lg:block">
          <div className="h-[500px] overflow-scroll no-scrollbar">
            {isRelatedLoading ? (
              <Loading />
            ) : (
              reletedData.slice(0, 8).map((relat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 bg-[#C0C9CD] rounded-xl my-1 mx-1 h-[140px]"
                >
                  <div className="col-span-2">
                    {relat.article_images
                      ?.slice(0, 1)
                      .map((image, imgIndex) => (
                        <Link href={`${relat._id}`}>
                          <img
                            key={imgIndex}
                            src={constructImageUrl(image)}
                            alt={`Article Image ${imgIndex + 1}`}
                            className="rounded-tl-lg rounded-bl-lg h-[140px] w-[170px] object-cover"
                          />
                        </Link>
                      ))}
                  </div>

                  <div className="p-1 py-2 col-span-4">
                    <p className="text-sm">
                      {calculateDaysAgo(relat.createdAt)}
                    </p>
                    <Link href={`${relat._id}`}><p className="font-semibold">
                      {relat.title
                        ? relat.title.split(" ").slice(0, 4).join(" ") +
                          (relat.title.split(" ").length > 5 ? "..." : "")
                        : ""}
                    </p>
                    <div>
                      {relat.summery
                        ? relat.summery.split(" ").slice(0, 5).join(" ") +
                          (relat.summery.split(" ").length > 5 ? "..." : "")
                        : ""}
                    </div></Link>
                  </div>
                </div>
              ))
            )}
          </div>
          </div>
        </div>
      </div>
      <div className="my-4 text-gray-700 w-full">
        {singleData.article_images?.slice(1)?.map((image, index) => (
          <img
            key={index}
            src={constructImageUrl(image)}
            alt={`Article Image ${index + 1}`}
            className="w-full my-4  rounded-lg"
          />
        ))}
        <span className="text-sm text-gray-600">
          Published: {calculateDaysAgo(singleData.createdAt)}
        </span>
      </div>
      <div
        className="text-gray-700 w-full "
        dangerouslySetInnerHTML={{ __html: singleData.description }}
      />

      <div className="block lg:hidden">
      <div className="">
            {isRelatedLoading ? (
              <Loading />
            ) : (
              reletedData.slice(0, 6).map((relat, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 bg-[#C0C9CD] rounded-xl my-1 mx-1 h-[140px]"
                >
                  <div className="col-span-2">
                    {relat.article_images
                      ?.slice(0, 1)
                      .map((image, imgIndex) => (
                        <Link href={`${relat._id}`}>
                          <img
                            key={imgIndex}
                            src={constructImageUrl(image)}
                            alt={`Article Image ${imgIndex + 1}`}
                            className="rounded-tl-lg rounded-bl-lg h-[140px] w-[170px] object-cover"
                          />
                        </Link>
                      ))}
                  </div>

                  <div className="p-1 py-2 col-span-4">
                    <p className="text-sm">
                      {calculateDaysAgo(relat.createdAt)}
                    </p>
                    <Link href={`${relat._id}`}><p className="font-semibold">
                      {relat.title
                        ? relat.title.split(" ").slice(0, 5).join(" ") +
                          (relat.title.split(" ").length > 5 ? "..." : "")
                        : ""}
                    </p>
                    <div>
                      {relat.summery
                        ? relat.summery.split(" ").slice(0, 5).join(" ") +
                          (relat.summery.split(" ").length > 5 ? "..." : "")
                        : ""}
                    </div></Link>
                  </div>
                </div>
              ))
            )}
          </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
