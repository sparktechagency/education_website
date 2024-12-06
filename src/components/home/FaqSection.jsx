"use client"; // Make sure the component is a client-side component

import React from "react";
import { Collapse } from "antd";
import { useTranslations } from "next-intl"; // Import the useTranslations hook

const text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry...
`;

const items = [
  {
    key: "1",
    label: "How much does your Web flow design cost?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "How long does it take for you to develop a website with Web flow?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label:
      "Do you recommend a WordPress to Webflow migration, and why is Webflow better than WordPress?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Is Webflow good for SEO and Branding?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "What sets your Webflow services apart from other companies?",
    children: <p>{text}</p>,
  },
];

const FaqSection = () => {
  const m = useTranslations("popular"); // Call useTranslations inside the component

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
