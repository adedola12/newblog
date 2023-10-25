"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";
import AuthSection from "./AuthSection";

const AuthLinks = () => {
  const { theme } = useContext(ThemeContext);
  
  const [open, setOpen] = useState(false);

  const commonAuthLinks = (
    // Menu Option
    <div
      className="w-[20px] h-[16px] flex-col justify-between cursor-pointer hidden max-[640px]:flex"
      onClick={() => setOpen(!open)}
    >
      <div className={`w-full h-[2px] ${theme === "light" ? "bg-sky-800" : "bg-white"}`} />
      <div className={`w-full h-[2px] ${theme === "light" ? "bg-sky-800" : "bg-white"}`} />
      <div className={`w-full h-[2px] ${theme === "light" ? "bg-sky-800" : "bg-white"}`} />
    </div>
  );

  return (
    <div>
      {commonAuthLinks}

      {/* Menu Items */}
      {open && (
        <div className={`absolute top-[100px] ${theme === "light" ? "bg-sky-800" : "bg-white text-sky-800"} h-[100vh] left-0 right-0 flex flex-col items-center justify-center gap-[50px] text-[36px]`}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

        {/* Auth Section */}
          <AuthSection />
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
