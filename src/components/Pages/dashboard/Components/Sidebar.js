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
import Logo from "../../../../../public/unibazar-logo.png";
import SmLogo from '../../../../../public/unibazar-image.png';

export default function Sidebar() {
    const tagsData = [
        {
            title: "Dashboard",
            to:"/dashboard",
            icon: IoMdTimer,
            subLinks:["Overview" , "Total sales" , "Active Listings" , "Orders"]
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
        <div className='h-screen'>
            <div className='logo px-5 py-5'>
                <Image className='hidden md:inline-block' src={Logo} width={180} height={180} alt='unibazar Logo'/>
                <Image className='inline-block md:hidden' src={SmLogo} width={35} height={35} alt='Unibazar Image'/>
            </div>

            <div className="links mt-5">
                {tagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} subLinks={tag.subLinks} to={tag.to} />
                ))}
            </div>

            <div className='w-full h-[2px] bg-zinc-200 mt-7'></div>
            <h1 className='mx-7 mt-4 text-bold text-zinc-500 hidden lg:block'>Additional</h1>

            <div className="links mt-5">
                {AdditionaltagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} />
                ))}
            </div>
        </div>
    )
}
