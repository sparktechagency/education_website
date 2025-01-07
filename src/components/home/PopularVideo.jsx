'use client'
import React from "react";
import Image from "next/image";
import line from "../../../public/home/line.png";

import PopularCard from "./PopularCard";
import { useTranslations } from "next-intl";
import { useGetshortVideosQuery } from "@/redux/Api/videoApi";
import { useState } from "react";
const PopularVideo = () => {
  const [sort, setSort] = useState("-totalView");
const { data: videoData } = useGetshortVideosQuery({sort});
  const videose = videoData?.data?.result || [];
  console.log(videose)

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  console.log(videose);
  
  const p = useTranslations("popular");
  return (
    <div className="px-4 lg::px-0">
      <div className="py-5 text-center ">
        <h1 className="text-[#2F799E] text-2xl font-bold font-serif">{p("Popular Videos")}</h1>
        <div className="flex justify-center mt-3">
          <Image  src={line} width={250} height={50} alt="line" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {videose.slice(0,8).map((video) => (
          <div
            key={video.id}
            
            
          >
            <PopularCard video={video}></PopularCard>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideo;
