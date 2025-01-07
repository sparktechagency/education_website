'use client'
import Loading from "@/components/Loading";
import Navigate from "@/components/navigate/Navigate";
import { useGetprivecyConditionsQuery } from "@/redux/Api/webmanageApi";
import { useTranslations } from "next-intl";
import { FaArrowLeft } from "react-icons/fa6";

const page = () => {

  const f = useTranslations("footer")
 const { data: privecy, isLoading, error } = useGetprivecyConditionsQuery(); 
  if (isLoading) {
    return <p className="h-screen"><Loading></Loading></p>;
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  const { description } = privecy?.data || {}; 
  return (
    <div className="max-w-[1400px] m-auto pt-5 pb-20">
      <div className="md:w-[20%]">
          <Navigate title={`${f("privacy Policy")}`}></Navigate>
        </div>

      <div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default page;
