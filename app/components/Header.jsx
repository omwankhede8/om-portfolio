import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w- max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.omDp}
          alt=""
          className="rounded-full w-48 "
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mv-3 font-Ovo"
      >
        Hi..!! I'm Om Wankhede
        <Image
          src={assets.hand_icon}
          alt=""
          className="w-6"
        />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Mern stack Developer & UI/UX Designer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Mern-Stack Developer with hands-on experience in building dynamic web
        applications using React , Node , Express , MongoDB & Mobile Application
        Using React Native
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2
          hover:shadow-white cursor-pointer 
          hover:-translate-y-1 duration-500 dark:bg-transparent "
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className=" w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/om.pdf" //pdf file resume
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
          hover:shadow-black cursor-pointer hover:bg-lightHover
          hover:-translate-y-1 duration-500 bg-white dark:text-black"
        >
          My resume
          <Image
            src={assets.download_icon}
            alt=""
            className=" w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
