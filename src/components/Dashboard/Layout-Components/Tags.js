'use client'
import Link from 'next/link';
import { usePathname, } from 'next/navigation';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../dashboard.module.css"

export default function Tags({ title, icon: Icon, subLinks ,to  , setShowSidebar}) {
    const path = usePathname();
    const CommingPath = to?.split('?')[0];
     
    const [toggleLinks, setToggleLinks] = useState(false);

    const handleToggleLinks = ()=>{
        setToggleLinks(!toggleLinks);
        
        if(window.innerWidth < 400 && path!= CommingPath && !subLinks){
            setShowSidebar(false);
        }
    }
    



    return (
        <div className='group'>
            <div className={`links px-4 py-1 group-hover:border-opacity-100 border-l-4 border-opacity-0 border-[#65B2B2] ${path==CommingPath && styles.activeLink}`}>
                <Link href={`${to}`}  onClick={handleToggleLinks} className='p-2 w-full rounded-lg group-hover:bg-zinc-200 cursor-pointer flex items-center gap-4'>
                    <Icon/>
                    <h1 className='text-sm lg:text-lg'>{title}</h1>
                    {subLinks && <MdKeyboardArrowDown className='ease-linear duration-200' style={{rotate:`${toggleLinks?"0deg": "-90deg"}`}}/> }
                </Link>
                    {subLinks && <div className='rounded-lg ml-8 overflow-hidden bg-white ease-linear duration-500' style={{maxHeight:`${toggleLinks?"300px":"0px"}`}}>
                        {subLinks?.map((link) => (
                            <h1 key={link} className='hover:bg-zinc-200 cursor-pointer rounded-md mt-1 text-sm lg:text-lg p-2 md:p-1'>{link}</h1>
                        ))}
                    </div>}
            </div>
        </div>
    )
}
