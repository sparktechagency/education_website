

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa6";
import { format } from "date-fns";
const Articles = ({ item }) => {
  const a = useTranslations("article");
  

  const calculateDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const differenceInTime = currentDate - createdDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays > 0 ? `${differenceInDays} days ago` : "Today";
  };

  console.log(item);

  return (
    <div className="mb-20">
     {item?.article_images?.slice(0,1).map((image, index) => (
          <img
            key={index}
            src={`http://192.168.10.11:6050/${image}`}
            alt={`${item?.title} - ${index + 1}`}
            className="object-cover rounded-3xl w-full"
          />
        ))}
      <h1 className="text-2xl font-bold my-7">{item?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: item?.description }}
        className="description-content"
      />
      <div className="flex my-5 items-center gap-4">
      <span className="text-lg">{calculateDaysAgo(item.createdAt)}</span>
        <Link href={`articleDetails/${item._id}`}>
          <button className="flex items-center gap-1 bg-[#2F799E] text-white px-3 pl-5 py-2 rounded-full">
            {a("Read More")}{" "}
            <span className="bg-yellow-500 p-1 rounded-full text-[#2F799E]">
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
