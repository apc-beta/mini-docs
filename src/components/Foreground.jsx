import {React, useRef} from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "The Data I want to display here is what is being displayed.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "AK-47 is a nice gun to have an accomodation with and a seriously deadly weapon.",
      filesize: ".4mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Mess around the card components a little too long seems like a game but not for kids very unhealthy.",
      filesize: ".5mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}
    },
  ];
  const ref = useRef(null);
  return (
    <div ref = {ref} className="fixed top-0 left-0 h-full w-full z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data ={item} key = {index} reference = {ref} />
      ))}
    </div>
  );
}

export default Foreground;
