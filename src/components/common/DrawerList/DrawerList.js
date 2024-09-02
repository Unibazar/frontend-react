import { Box} from '@mui/material';
import Image from 'next/image';
import Logo from "../../../../public/unibazar-logo.png"

import Link from 'next/link';

export default function DrawerList({toggleDrawer , isActive}) {
  return (
    <Box role="presentation" onClick={toggleDrawer(false)}>
       <div className="w-[250px] bg-white">
              <Link href="/" className='flex justify-center items-center mt-5'>
                <Image src={Logo} width={150} height={150} className='object-cover w-3/4' alt="unizabar logo"/>
              </Link>
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link href="/" className={`${isActive('/') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={`${isActive('/about-us') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/features" className={`${isActive('/features') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={`${isActive('/pricing') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={`${isActive('/contact-us') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className={`${isActive('/login') ? ' text-teal-500' : 'text-gray-600'} text-gray-600 hover:text-teal-700`}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800">
                Register
              </Link>
            </li>
          </ul>
        </div>
    </Box>
  )
}
