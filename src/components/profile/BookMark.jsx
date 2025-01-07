'use client'
import React from "react";
import Videos from "../video/Videos";

import { useGetOnlyVideoQuery } from "@/redux/Api/videoApi";
import Loading from "../Loading";

const BookMark = () => {
   const { data, isLoading, error } = useGetOnlyVideoQuery();
  

    if (isLoading) {
      return <p className="h-screen"><Loading></Loading></p>;
    }
  
    if (error) {
      return <div>Error loading articles: {error.message}</div>;
    }

    
    const videos = (data?.data?.result || []).filter(
      (video) => video.isBookmark === true
    );
    
    
    // const videos = [
    //     {
    //       id: 1,
    //       title: "Education is the most powerful weapon",
          
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 2,
    //       title: "Education is the most powerful weapon",
          
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 3,
    //       title: "Education is the most powerful weapon",
    
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 4,
    //       title: "Education is the most powerful weapon",
         
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 5,
    //       title: "Education is the most powerful weapon",
        
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 6,
    //       title: "Education is the most powerful weapon",
        
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
    //     {
    //       id: 7,
    //       title: "Education is the most powerful weapon",
         
    //       views: "1.3M views",
    //       time: "2 day's ago",
    //       thumbnail: img,
    //     },
        
    //   ];
    return (
        <div>
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

export default BookMark;