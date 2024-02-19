import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className='relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight font-semibold mt-5'>lorem iasdca asdkasfa dfa sfa sfasdfadf ad adfa sfasfa</p>
        <div className='footer absolute bottom-0 w-full left-0 py-3 px-8'>
            <div className='flex items-center justify-between'>
                <h5>0.4mb</h5>
                <LuDownload />
            </div>
        </div>
    </div>
  )
}

export default Card