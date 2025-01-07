"use client";
import React from "react";
import Loading from "@/components/Loading";
import Navigate from "@/components/navigate/Navigate";
import { useGetLawQuery } from "@/redux/Api/webmanageApi";

import { useTranslations } from "next-intl";
const page = () => {
  const f = useTranslations("footer");

  const { data: law, isLoading, error } = useGetLawQuery();
  if (isLoading) {
    return <p className="h-screen"><Loading></Loading></p>;
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  const { description } = law?.data || {};

  return (
    <div>
      <div className="max-w-[1400px] m-auto pt-4">
        <Navigate title={`${f("Partner Law Firms")}`}></Navigate>
        <div className="">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default page;
