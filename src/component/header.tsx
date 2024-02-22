import React from "react";
import { MdDirectionsBus, } from "react-icons/md";

const header = () => {
  return (
    <header className="fixed">
      <div className="container p-4">
        <h6 className="text-red text-2xl font-bold"> <MdDirectionsBus  /> Bus Booking</h6>
      </div>
    </header>
    // <div className=" w-full bg-white md:px-28 px-0">
    //   <div className="flex justify-between items-center h-20 nav ">
    //     <div>
    //       <h1 className="text-2xl font-signature ml-2">
    //         <a
    //           className="link-underline link-underline-black"
    //           href=""
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <Image src='data:image/png;base64,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'
    //             width={200} height={400} alt='logo' />
    //         </a>
    //       </h1>
    //     </div>

    //     <ul className="flex items-center">
    //       <li
    //         className="nav-links px-4 cursor-pointer hover:underline duration-200 link-underline text-sm text-[#0062e3]"
    //       >
    //         <Link href={'/help'} >Help</Link>
    //       </li>
    //       <li className="text-base font-semibold bg-[#e0e3e5] px-5 py-1 text-bold rounded-md text-[#161616] cursor-pointer hover:bg-[#c2c9cd]">
    //         Log in
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <ul className="flex gap-4">
    //       {
    //         ['flights', 'hotels', 'car'].map((services:string)=>{
    //           return(
    //             <li key={services} className="text-base capitalize font-semibold bg-[#0062e3] px-5 py-1 text-bold text-[#fff] cursor-pointer hover:bg-[#05203c]">
    //             <Link href={services}><MdOutlineFlight /> {services}</Link>
    //           </li>
    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    // </div>
  );
};

export default header;