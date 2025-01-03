'use client'
import Image from "next/image";
import line from "../../../public/home/line.png";
import img from "../../../public/home/popular.png";
import img1 from "../../../public/home/popular1.png";
import img2 from "../../../public/home/popular2.png";
import img3 from "../../../public/home/popular3.png";
import img4 from "../../../public/home/popular4.png";
import img5 from "../../../public/home/popular5.png";
import img6 from "../../../public/home/popular6.png";
import PopularCard from "./PopularCard";
import { useTranslations } from "next-intl";
import { useGetshortVideosQuery } from "@/redux/Api/videoApi";
import { useState } from "react";
const PopularVideo = () => {
  const [sort, setSort] = useState("-totalView");
const { data: videoData } = useGetshortVideosQuery({sort});
  const videose = videoData?.data?.result || [];

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  console.log(videose);
  const videos = [
    {
      id: 1,
      title: "Education is the most powerful weapon",
      
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img,
    },
    {
      id: 2,
      title: "Education is the most powerful weapon",
      
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img1,
    },
    {
      id: 3,
      title: "Education is the most powerful weapon",

      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img2,
    },
    {
      id: 4,
      title: "Education is the most powerful weapon",
     
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img3,
    },
    {
      id: 5,
      title: "Education is the most powerful weapon",
    
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img4,
    },
    {
      id: 6,
      title: "Education is the most powerful weapon",
    
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img5,
    },
    {
      id: 7,
      title: "Education is the most powerful weapon",
     
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img6,
    },
    {
      id: 8,
      title: "Education is the most powerful weapon",
    
      views: "1.3M views",
      time: "2 day's ago",
      thumbnail: img4,
    },
   
  ];

  const p = useTranslations("popular");
  return (
    <div className="px-4 lg::px-0">
      <div className="text-center py-5 ">
        <h1 className="text-[#2F799E] text-2xl font-bold font-serif">{p("Popular Videos")}</h1>
        <div className="flex justify-center mt-3">
          <Image  src={line} width={250} height={50} alt="line" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
