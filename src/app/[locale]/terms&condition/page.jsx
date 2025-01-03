'use client'
import Navigate from "@/components/navigate/Navigate";
import { useGetTermsContuctQuery } from "@/redux/Api/webmanageApi";
import { useTranslations } from "next-intl";



const page = () => {
  const f = useTranslations("footer")
  const { data: terms, isLoading, error } = useGetTermsContuctQuery(); 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  const { description } = terms?.data || {}; 
    return (
        <div className="max-w-[1400px] m-auto pt-5 pb-20">
      <div className="md:w-[20%]">
          <Navigate title={`${f("Terms & condition")}`}></Navigate>
        </div>

      <div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
    );
};

export default page;