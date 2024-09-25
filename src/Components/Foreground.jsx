import React, { useRef } from "react";
import Card from "./Card";


const Foreground = () => {

  const ref = useRef(null);

  // const data =[
  //  desc, filesize, closeorDownload, tagdetails
  // ]
  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
  ];

  return (
    <div ref={ref} className="fixed z-p[3] top-0 w-full left-0 h-full flex gap-5 flex-wrap p-10 ">
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
