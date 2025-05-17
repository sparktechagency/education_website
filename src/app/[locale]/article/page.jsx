"use client";
import React, { useState } from "react";
import Articles from "@/components/articles/Articles";
import Loading from "@/components/Loading";
import Navigate from "@/components/navigate/Navigate";
import { useGetArticleQuery } from "@/redux/Api/article";
import { useLocale, useTranslations } from "next-intl";
import { NoData } from "@/components/NoData";
import { Pagination } from "antd";
 // Import NoData component

const Page = () => {
  const [searchTerm, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const locale = useLocale();
  const selectedLanguage = locale === "en" ? "ENGLISH" : "SPANISH";
  const pageSize = 10;
  const { data, isLoading, error } = useGetArticleQuery({ searchTerm ,page: currentPage,
    limit: pageSize,});
    console.log(data)
  
  const m = useTranslations("hero");
  const p = useTranslations("profile");

  

  if (isLoading) {
    return (
      <p className="h-screen">
        <Loading />
      </p>
    );
  }

  if (error) {
    return <div>Error loading articles: {error.message}</div>;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const articles = data?.data?.result || [];
  console.log(articles)

   const filteredArticles = (articles || []).filter(
    (article) => article.language === selectedLanguage
  );

 

  return (
    <div className="max-w-[1400px] m-auto">
      <div className="mx-4 lg:mx-0">
        <div className="md:flex items-center gap-2 mt-5 lg:my-5 lg:mb-11 mb-5">
          <div className="md:w-[20%] mb-2 md:mb-0">
            <Navigate title={`${p("All Article")}`} />
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
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="grow order-2 text-left bg-transparent placeholder-transparent"
                placeholder="Search"
              />
              <span className="absolute right-3 text-white pointer-events-none">
                {m("search")}
              </span>
            </label>
          </div>
        </div>

        {filteredArticles?.length > 0 ? (
          <div className="lg:px-3">
            {filteredArticles?.map((item) => (
              <Articles key={item?._id} item={item} />
            ))}
          </div>
        ) : (
          <NoData /> // Render NoData component if no articles are found
        )}
      </div>
      <div className="mt-4 flex justify-center mb-11">
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

export default Page;
