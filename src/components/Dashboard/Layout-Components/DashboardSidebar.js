'use client'
import React from 'react';
import Tags from './Tags';
import { IoMdTimer } from "react-icons/io";
import { RiLayoutGridLine } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { MdOutlineTableRows } from "react-icons/md";
import Image from 'next/image';
import Logo from "../../../../public/unibazar-logo.png";
import { IoCloseOutline } from "react-icons/io5";
import Link from 'next/link';

export default function DashboardSidebar({setShowSidebar}) {
    const tagsData = [
        {
            title: "Dashboard",
            to:"/dashboard",
            icon: IoMdTimer,
            subLinks:[{title:"Overview" , to:"/dashboard/overview"},{title:"Total sales" , to:"/dashboard/totalsales"} ,{title:"Active Listings" , to:"/dashboard/activelisting"},{title:"Orders" , to:"/dashboard/orders"}, {title:"Link Account" , to:"/dashboard/linkaccount"}]
        },
        {
            title: "Products",
            to:"/dashboard/products",
            icon: RiLayoutGridLine,
        },
        {
            title: "Order List",
            to:"/dashboard/orderlist",
            icon: BsListCheck,
        },
        {
            title: "Analytics",
            to:"/dashboard/analytics",
            icon: FaRegHeart,
        },
        {
            title: "Account Settings",
            to:"/dashboard/accountsettings",
            icon: TiMessages,
        },
        {
            title: "Help & Support",
            to:"/dashboard/helpandsupport",
            icon: MdOutlineTableRows,
        },
    ]
    const AdditionaltagsData = [
        {
            title: "Platform Selection",
            icon: RiLayoutGridLine,
        },
        {
            title: "Edit Inventor",
            icon: BsListCheck,
        },
        {
            title: "Additional settings",
            icon: MdOutlineTableRows,
        },
    ]
 
    return (
        <div className='h-screen relative'>
            <div className='logo px-5 py-5 flex justify-between items-center sticky top-0 bg-white shadow-sm z-[98]'>
                <Link href={"/"}><Image src={Logo} width={180} height={180} alt='unibazar Logo'/></Link>
                <button className='block md:hidden text-2xl' onClick={()=>setShowSidebar(false)}><IoCloseOutline/></button>
            </div>

            <div className="links mt-5">
                {tagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} subLinks={tag.subLinks} to={tag.to} setShowSidebar={setShowSidebar}/>
                ))}
            </div>

            <div className='w-full h-[2px] bg-zinc-200 mt-7'></div>
            <h1 className='mx-7 mt-4 text-bold text-zinc-500'>Additional</h1>

            <div className="links mt-5">
                {AdditionaltagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} />
                ))}
            </div>
        </div>
    )
}
