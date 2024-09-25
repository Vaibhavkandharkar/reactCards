import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"



function Card ({data, reference})  {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={{scale:1.1}} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
    className='relative flex-shrink-0 h-72 w-60 rounded-[45px] overflow-hidden py-10 px-5 bg-zinc-900/90 text-white p-5'>
        <FaRegFileAlt />
        <p className='text-sm left-0 mt-5 leading-tight font-semibold'>{data.desc}</p>
         <div className='footer absolute w-full left-0 bottom-0'>
          <div className='flex items-center px-8 py-3 justify-between mb-3'>
          <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoCloseSharp/> : <LuDownload size=".7em" color="#fff " />}
          </span>
          </div> 
        {data.tag.isOpen && (
            <div className={`tag w-full py-4 flex items-center ${data.tag.tagColor === "blue" ? "bg-blue-600" :"bg-green-600"} justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>

          )}
         </div>
    </motion.div>
  )
}

export default Card