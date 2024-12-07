import Navigate from "@/components/navigate/Navigate";

import { useTranslations } from "next-intl";
const page = () => {
  const f = useTranslations("footer");

  const law = [
    {
      id: "1",
      title: "Education Law",
      description:
        " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
    },
    {
      id: "2",
      title: "Education Law",
      description:
        " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
    },
    {
      id: "3",
      title: "Education Law",
      description:
        " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
    },
    {
      id: "4",
      title: "Education Law",
      description:
        " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
    },
    {
      id: "5",
      title: "Education Law",
      description:
        " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
    },
    {
        id: "6",
        title: "Education Law",
        description:
          " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
      },
      {
        id: "7",
        title: "Education Law",
        description:
          " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
      },
      {
        id: "8",
        title: "Education Law",
        description:
          " Firms that specialize in the legal aspects of the education sector, including policies, regulations, and contracts.",
      },
  ];

  return (
    <div>
      <div className="max-w-[1400px] m-auto pt-4">
        <Navigate title={`${f("Partner Law Firms")}`}></Navigate>
      </div>
      <div className="max-w-[1400px] m-auto md:py-40 p-4">
        <div className="grid grid-cols-2">
          {law.map((item) => (
            <div>
              <div className="">
                <h1 className="my-6 max-w-[500px]">
                  <span className="font-bold"> {item.title}</span> -{" "}
                  {item.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
