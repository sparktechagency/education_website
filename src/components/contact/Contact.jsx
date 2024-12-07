"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const p = useTranslations("profile")
  return (
    <div className="bg-white p-4 max-w-[600px] rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className="font-semibold">{p("Full Name")}</span>
          <input
            className="bg-white border-b py-2 border-black w-full"
            {...register("fullNname")}
            placeholder="jone copper"
          />
        </label>
        <div className="grid grid-cols-2 gap-5 mt-11 ">
          <label>
            <span className="font-semibold">{p("Contact Number")}</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("contact")}
              placeholder="+99 4543 34543 213"
            />
          </label>

          <label>
            <span className="font-semibold">{p("Email")}</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("email")}
              placeholder="joneCopper@gmail.com"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-11 mb-11">
          <label>
            <span className="font-semibold">{p("Select Services")}</span>
            <select
              className="bg-white border-b py-2 border-black w-full"
              {...register("gender")}
            >
              <option value="female">Education</option>
              <option value="male">Education</option>
              <option value="other">other</option>
            </select>
          </label>

          <label>
            <span className="font-semibold">{p("Location")}</span>
            <input
              className="bg-white border-b py-2 border-black w-full"
              {...register("location")}
              placeholder="68/ jokar vila, Gotham, City"
            />
          </label>
        </div>

        <div className="mt-4">
          <label className="">
            <span className="font-semibold ">{p("Description")}</span>
            <input
              className="bg-white border-b py-2  border-black w-full"
              {...register("location")}
              placeholder="Type Here"
            />
          </label>
        </div>

        <input className="bg-[#2F799E] px-4 py-1 text-white rounded mt-6" type="submit" value={"Send"} />
      </form>
    </div>
  );
};

export default Contact;
