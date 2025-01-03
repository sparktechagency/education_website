"use client"; // Make sure the component is a client-side component

import React from "react";
import { Collapse } from "antd";
import { useTranslations } from "next-intl"; // Import the useTranslations hook
import { useGetFaqQuery } from "@/redux/Api/webmanageApi";


const FaqSection = () => {
  const m = useTranslations("popular"); // Call useTranslations inside the component
  const {data: faqData , isLoading, error} = useGetFaqQuery();
  


  // Check if data is still loading
if (isLoading) {
  return <p>Loading FAQs...</p>;
}

// Handle potential errors
if (error) {
  return <p>Failed to load FAQs. Please try again later.</p>;
}

const items =
    faqData?.data?.map((faq) => ({
      key: faq.id,
      label: faq.question,
      children: <p>{faq.answer}</p>,
    })) || [];


  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-center mt-16">{m("Faa")}</h1>

      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIconPosition="right"
      />
    </div>
  );
};

export default FaqSection;
