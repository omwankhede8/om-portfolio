import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold ">
          OM <span className="text-red-600 text-5xl -ml-2 ">.</span>
        </h1>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          omwankhede2002@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Om Wankhede. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/omwankhede8"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/om-wankhede-702257217/"
            >
              Linkdin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
