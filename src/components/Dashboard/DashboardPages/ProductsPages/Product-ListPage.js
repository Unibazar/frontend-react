import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { LuCalendar, LuLayoutGrid } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { useState } from "react";
import TableLayout from "./ProductPage-Components/TableLayout";


export default function ListProductPage() {
  const [searchBoxText, setSearchBoxText] = useState("");
  const [lastDateModified, setLastDateModified] = useState("all-time");
  const [status, setStatus] = useState("all");
  const [layoutDetail, setLayoutDetail] = useState("list");

  const toggleLayoutDetail = ()=>{
      setLayoutDetail(prev=>prev=="list"?"cards":"list");
  }

  const tableData = [
    {
      id: 1,
      product: {
        type: "Hoodie",
        brand: "CozyWear",
        details: "size - M to XXL"
      },
      startDate: "08/15/2024",
      lastModified: "08/20/2024",
      status: "In Progress",
      quantity: 25,
    },
    {
      id: 2,
      product: {
        type: "Sneakers",
        brand: "SpeedRun",
        details: "size - 6 to 12"
      },
      startDate: "07/22/2024",
      lastModified: "08/01/2024",
      status: "Available",
      quantity: 40,
    },
    {
      id: 3,
      product: {
        type: "Cap",
        brand: "UrbanWear",
        details: "one size"
      },
      startDate: "06/10/2024",
      lastModified: "06/15/2024",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 4,
      product: {
        type: "Jacket",
        brand: "WarmUp",
        details: "size - S to L"
      },
      startDate: "05/01/2024",
      lastModified: "05/15/2024",
      status: "Available",
      quantity: 30,
    },
    {
      id: 5,
      product: {
        type: "Sunglasses",
        brand: "SunShine",
        details: "one size"
      },
      startDate: "04/10/2024",
      lastModified: "04/20/2024",
      status: "In Progress",
      quantity: 15,
    },
    {
      id: 6,
      product: {
        type: "Watch",
        brand: "TimeMaster",
        details: "one size"
      },
      startDate: "03/25/2024",
      lastModified: "04/05/2024",
      status: "Out of Stock",
      quantity: 5,
    },
    {
      id: 7,
      product: {
        type: "Backpack",
        brand: "CarryOn",
        details: "one size"
      },
      startDate: "02/15/2024",
      lastModified: "02/25/2024",
      status: "Available",
      quantity: 20,
    },
    {
      id: 8,
      product: {
        type: "Belt",
        brand: "SecureFit",
        details: "size - S to XL"
      },
      startDate: "01/10/2024",
      lastModified: "01/20/2024",
      status: "In Progress",
      quantity: 50,
    },
    {
      id: 9,
      product: {
        type: "Gloves",
        brand: "WarmHands",
        details: "size - M to L"
      },
      startDate: "12/05/2023",
      lastModified: "12/15/2023",
      status: "Available",
      quantity: 35,
    },
    {
      id: 10,
      product: {
        type: "Scarf",
        brand: "CozyWrap",
        details: "one size"
      },
      startDate: "11/10/2023",
      lastModified: "11/20/2023",
      status: "Out of Stock",
      quantity: 0,
    }
  ];


  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Products</h1>
        <div className=''>
          <Link href="/dashboard/products?q=add-product" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
            Add New Products
          </Link>
        </div>
      </div>

      <div className="boxs flex mt-7 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
        {/* searchbar section */}
        <div className="header flex w-full justify-between flex-wrap gap-5 lg:gap-10">
          <div className="serachbox flex w-[70%] md:w-[40%] items-center gap-2 py-1 md:py-2 rounded-lg px-2 border-2">
            <IoIosSearch />
            <input type="text" value={searchBoxText} onChange={(e)=>setSearchBoxText(e.target.value)} className='bg-transparent outline-none w-full' placeholder='Search By Name or Description' />
          </div>

          {/* filter section  */}
          <div className="filters flex gap-4 items-center flex-wrap text-xs md:text-lg">
            <div className="border-2 rounded-full p-2 flex items-center gap-1">
              <LuCalendar />
              <h1>Last Modified:</h1>
              <select name="time" className="outline-none" value={lastDateModified} onChange={(e)=>setLastDateModified(e.target.value)}>
                <option value="all-time">All Time</option>
                <option value="last-week">Last Week</option>
              </select>
            </div>
            <div className="border-2 rounded-full p-2 flex items-center gap-1">
              <LuListTodo />
              <h1>Status:</h1>
              <select name="status" className="outline-none" value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="finished">Finished</option>
              </select>
            </div>

            <div className="w-[2px] h-1/2 bg-zinc-300"></div>
            <div className="advanceFilter">
              <button className="text-[#207A7A]">Advance Filter</button>
            </div>
          </div>
        </div>

        {/* pagination section  */}
        <div className="pageChanger flex justify-between items-center w-full flex-wrap mt-5 md:mt-0">
          <div className="pageChangeButton flex items-center md:gap-2 flex-wrap gap-5">
            <div className="textContainer">
              <h1 className="text-zinc-400">Showing 1 - 20 of 161</h1>
            </div>
            <div className="pageChangeBtns flex border-2 rounded-lg">
              <div className="left p-2 border-r-2">
                <MdKeyboardArrowLeft />
              </div>
              <div className="left2 p-2 border-r-2">
                <MdKeyboardDoubleArrowLeft />
              </div>
              <div className="right p-2 border-r-2">
                <MdKeyboardArrowRight />
              </div>
              <div className="right2 p-2 ">
                <MdKeyboardDoubleArrowRight />
              </div>
            </div>
          </div>


          <div className="menus flex items-center border-2 rounded-lg mt-5 md:mt-0 text-xs md:text-lg">
            <button onClick={toggleLayoutDetail} className={`box p-2 ${layoutDetail=="list"?"bg-[#078680] text-white":"bg-white text-black"}  rounded-l-md flex items-center gap-2`}>
              <FaListUl className='text-xs md:text-lg lg:text-xl' />
              <span>List</span>
            </button>
            <button onClick={toggleLayoutDetail} className={`box p-2 ${layoutDetail=="cards"?"bg-[#078680] text-white":"bg-white text-black"}  rounded-r-md flex items-center gap-2`}>
              <LuLayoutGrid className='text-xs md:text-lg lg:text-xl' />
              <span>Cards</span>
            </button>
          </div>
        </div>


        <TableLayout tableData={tableData}/>
      </div>
    </div>
  )
}
