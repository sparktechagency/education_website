'use client';
import React from "react";
import { useTranslations } from 'next-intl';
import { useGetAboutQuery } from '@/redux/Api/webmanageApi';
import Loading from '@/components/Loading';

const Page = () => {
  const { data: aboutUs, isLoading, error } = useGetAboutQuery(); // Fetch API data
  const m = useTranslations("aboutus");

  if (isLoading) {
    return <p className="h-screen"><Loading></Loading></p>;
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  const { description } = aboutUs?.data || {}; 

  return (
    <div className="mb-20">
      <div className="bg-[#DBE3EA] py-8 px-4">
        <div className="max-w-[1400px] m-auto">
          <h1 className="md:text-4xl text-2xl font-bold">{m("Discover Who We Are")}</h1>
          <h1 className="text-white font-bold md:text-4xl text-2xl mt-2">
            <span className="text-zinc-600">-</span> {m("what drives us")}
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] m-auto">
        <div className="mt-11 mx-4">
         


          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
