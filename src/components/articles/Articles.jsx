import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";


const Articles = ({item}) => {
    const a = useTranslations("article")
    return (
        <div className="mb-20">
            <Image
                src={item.thumbnail}
                alt={item.title}
                width={1500}
                height={1000}
                className="  object-cover rounded-3xl"
              />
           <h1 className="text-2xl font-bold my-7">
           {item.title}
           </h1>
           <p>{item.description}</p>
           <div className="flex my-5 items-center gap-4">
           <p className="text-[#2F799E] ">{item.time}</p>
           <Link href={`/articleDetails/${item.id}`}><button className="flex items-center gap-1 bg-[#2F799E] text-white px-3 pl-5 py-2 rounded-full">{a("Read More")} <span className="bg-yellow-500 p-1 rounded-full text-[#2F799E]"><FaArrowRight /></span></button></Link>
           </div>

        </div>
    );
};

export default Articles;