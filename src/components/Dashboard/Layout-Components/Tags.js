'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../dashboard.module.css"

export default function Tags({ title, icon: Icon, subLinks ,to}) {
    const path = usePathname();
    const CommingPath = to?.split('?')[0];
     
    const [toggleLinks, setToggleLinks] = useState(false);

    const handleToggleLinks = ()=>{
        setToggleLinks(!toggleLinks);
    }


    return (
        <div className='group'>
            <div className={`links px-2 md:px-4 py-1 group-hover:border-opacity-100 border-l-4 border-opacity-0 border-[#65B2B2] ${path==CommingPath && styles.activeLink}`}>
                <Link href={`${to}`}  onClick={handleToggleLinks} className='p-1 lg:p-2 w-full rounded-lg group-hover:bg-zinc-200 cursor-pointer flex items-center gap-0 md:gap-4'>
                    <Icon className="w-full md:w-fit"/>
                    <h1 className='hidden md:block text-sm lg:text-lg'>{title}</h1>
                    {subLinks && <MdKeyboardArrowDown style={{rotate:`${toggleLinks?"180deg": "0deg"}`}}/> }
                </Link>
                    {subLinks && <div className='rounded-lg ml-8 overflow-hidden absolute z-10 bg-white left-[0%] md:static md:p-0' style={{height:`${toggleLinks?"":"0px"}`}}>
                        {subLinks?.map((link) => (
                            <h1 key={link} className='hover:bg-zinc-200 cursor-pointer rounded-md mt-1 text-sm lg:text-lg p-4 md:p-1'>{link}</h1>
                        ))}
                    </div>}
            </div>
        </div>
    )
}
