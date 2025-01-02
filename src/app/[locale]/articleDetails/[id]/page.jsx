"use client";

import { useGetSingleArticleQuery } from "@/redux/Api/article";
import Image from "next/image";
import { notFound } from "next/navigation";

const ArticleDetails = ({ params }) => {
  const { id } = params;

  
  const { data: singleData, isLoading, error } = useGetSingleArticleQuery({ id });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching article data.</p>;
  }

  if (!singleData) {
    return notFound();
  }

  return (
    <div className="max-w-[1400px] px-4 lg:px-0 m-auto mb-20">
      <h1 className="text-2xl font-bold my-6">{singleData.title}</h1>
      {singleData.article_images?.length > 0 && (
        <Image
          src={`http://192.168.10.11:6050/${singleData.article_images[0]}`}
          width={1500}
          height={399}
          alt={singleData.title}
          className="rounded-lg"
        />
      )}
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: singleData.description }}
      />
    </div>
  );
};

export default ArticleDetails;
