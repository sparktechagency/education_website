"use client"; 

import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { usePathname } from "next/navigation";



export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarFooter = pathname === "/signIn" || pathname === "/signIn/forgetpass" || pathname === "/signIn/forgetpass/otp" || pathname === "/signIn/forgetpass/otp/resetpassword"; 

  return (
    <>
      {!hideNavbarFooter && <div className="bg-[#2F799E] fixed w-full z-50">
            <div className="max-w-[1400px] m-auto">
              <Navbar />
            </div>
          </div>}
      <hr />
      {children}
      {!hideNavbarFooter &&  <div className="bg-[#2F799E] pb-2">
            <div className="">
              <Footer />
            </div>
          </div>}
    </>
  );
}