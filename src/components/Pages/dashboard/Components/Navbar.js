import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='flex items-center justify-between w-full p-4 sticky top-0 bg-white'>
            <div className="left flex items-center gap-2 md:gap-4">
                <IoIosMenu className='text-lg md:text-3xl' />
                <div className="serachbox flex items-center bg-zinc-100 gap-4 py-1 md:py-2 rounded-full px-2 md:px-4">
                    <IoIosSearch/>
                    <input type="text" className='bg-transparent outline-none md:w-80 w-16' placeholder='Search'/>
                </div>
            </div>

            <div className="right flex items-center gap-2 md:gap-4">
                <FaBell className='text-lg md:text-2xl '/>
                <img className='rounded-full w-8 md:w-12 h-8 md:h-12 object-cover' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

        </div>
    )
}
