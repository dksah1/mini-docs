import React from "react";
import { MdContactPage } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 300 }}
      className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden "
    >
      <MdContactPage />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
      footer
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3 ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {close ? (
              <IoCloseSharp />
            ) : (
              <MdDownloadForOffline size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
