import Link from "next/link";
import { IconContext } from "react-icons";
import { MdBookOnline, MdHomeFilled, MdMoreHoriz } from "react-icons/md";


const Footer = () => {
    return (
        <>
            {/* <IconContext.Provider value={{ className: "h-5 w-5 text-[#00adb5]" }} > */}
                <footer className="fixed bottom-0 w-full  p-2 flex justify-center items-center gap-x-16 bg-white border-t border border-[#bcbcbc]">
                    <Link href="/" className="text-gray hover:text-gray-400 text-center">
                        <MdHomeFilled /><br />
                        <span className="text-red text-[13px]">HOME</span>
                    </Link>
                    <Link href="/my-booking" className="text-gray hover:text-gray-400 text-center">
                        <MdBookOnline /><br />
                        <span className="text-red text-[13px]"> MY BOOKING</span>
                    </Link>
                    <Link href="/more" className="text-gray hover:text-gray-400 text-center">
                        <MdMoreHoriz /><br />
                        <span className="text-red text-[13px]"> MORE</span>
                    </Link>
                </footer>
            {/* </IconContext.Provider> */}
        </>
    );
};

export default Footer;
