"use client";
import { MdArrowBack } from "react-icons/md";
import img from "../../../../../public/home/popular.png";
import img4 from "../../../../../public/home/popular.png";
import Image from "next/image";
import img1 from "../../../../../public/home/popular1.png";
import img2 from "../../../../../public/home/popular2.png";
import img3 from "../../../../../public/home/popular3.png";
import img7 from "../../../../../public/home/popular4.png";
import img5 from "../../../../../public/home/popular5.png";
import img6 from "../../../../../public/home/popular6.png";
import Navigate from "@/components/navigate/Navigate";
import { useTranslations } from "next-intl";

import { useGetSingleVideosQuery } from "@/redux/Api/videoApi";
import { useParams } from "next/navigation";
import BaseUrl from "@/components/baseApi/BaseApi";
const page = () => {
  const params = useParams();
  const { data: apiResponse, isLoading, error } = useGetSingleVideosQuery({ id: params?.id });

  const a = useTranslations("hero");
  const p = useTranslations("profile");

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Failed to load video details.</p>;
  }

  const videoData = apiResponse?.data;

  // Ensure BaseUrl and path are properly combined
  const constructUrl = (path) =>
    path ? `${BaseUrl.replace(/\/$/, "")}${path.replace(/\\/g, "/")}` : "";

  const videoUrl = constructUrl(videoData?.video); // Construct video URL
  const thumbnailUrl = constructUrl(videoData?.thumbnail_image); 

  console.log(videoUrl)
  return (
    <div>
      <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
        <div className="flex items-center gap-2 my-5 mb-11">
          <div className="md:w-[20%]">
            <Navigate title={`${p("Details")}`}></Navigate>
          </div>
          <div className="md:w-[60%]">
            <label className="input input-bordered rounded-sm flex items-center gap-2 bg-[#75BEE3] max-w-[900px] m-auto text-white relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 order-1"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow order-2 text-left bg-transparent placeholder-transparent"
                placeholder="Search"
              />
              <span className="absolute right-3 text-white pointer-events-none">
                {a("search")}
              </span>
            </label>
          </div>
        </div>

        <div className="lg:grid grid-cols-3">
          <div className="col-span-2 mt-2 md:mr-4">
            <div className="relative">
            <video
            src={videoUrl}
            poster={thumbnailUrl}
            className="w-full h-90 object-cover"
            controls
            autoPlay
          />
              
            </div>
          </div>

          <div className="col-span-1 ">
            {/* {related.slice(0, 3).map((relat) => (
              <>
                <div>
                  <div className="flex bg-[#C0C9CD] rounded-xl my-2 mx-1">
                    <Image
                      className="rounded-xl"
                      src={relat.thumbnail1}
                      width={140}
                      height={100}
                      alt="asdf"
                    />

                    <div className="p-3">
                      <p className="font-semibold"> {relat.time1}</p>
                      <p className=" font-semibold ">{relat.title1}</p>
                      <p className="text-sm">{relat.detaisl}</p>
                    </div>
                  </div>
                </div>
              </>
            ))} */}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#2F799E] mt-5">{videoData?.title}</h1>
        <p className="text-md text-gray-600 mt-3">{videoData?.description}</p>
        <p className="text-sm text-gray-500 mt-1">Views: {videoData?.totalView}</p>

        <div></div>
      </div>
    </div>
  );
};

export default page;
