import Image from "next/image";
import footer from "../../../public/navbar/logo.png";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Terms & condition",
      path: "/terms&condition",
    },
    {
      title: "privacy Policy",
      path: "/privacyPolicy",
    },
    {
      title: "Feedback",
      path: "/feedback",
    },

    {
      title: "Partner Law Firms",
      path: "/partnerlaw",
    },
  ];
  return (
    <div className="max-w-[1400px] m-auto px-4 lg:px-0">
      <div className=" md:grid grid-cols-3 pt-5 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <Image src={footer} width={50} height={50} alt="footer" />
            <span className="text-white font-semibold">Kids Know Rights</span>
          </div>
          <p className="text-white mt-5">
            "Children are not only our future, but they also have a right to
            shape it with their voices heard and their rights upheld."
          </p>
          <Link href={'/contact'}><button className="bg-white rounded text-[#2F799E] font-semibold p-2 px-7 mt-5">
            contact Us
          </button></Link>
        </div>
        <div className="md:flex justify-center py-9 md:py-0">
          <div className="text-white space-y-3">
            <h1 className="font-semibold">Quick Link</h1>
            {navItems.map((item, index) => (
              <div key={index}>
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white space-y-3">
          <h1 className="font-semibold">Like Us?</h1>
          <div className="flex items-center gap-2">
            <CiFacebook />
            <span>Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <RiTwitterXFill />
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <hr className="border border-slate-400" />

      <div className="flex justify-between text-white items-center pt-5 pb-4">
        <p>Social Media</p>

        <div className="flex items-center gap-4 ">
          <CiFacebook />

          <RiTwitterXFill />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
