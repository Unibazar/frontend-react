import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


export default function DropDownBox({ title , Component}) {
  const [showBox, setShowBox] = useState(false)

  const handleHightToggler = () => {
    setShowBox(!showBox);
  }
  return (
    <>
      <div onClick={handleHightToggler} className="box bg-white mt-7 rounded-md p-3 text-2xl flex justify-between items-center">
        <p className="capitalize">{title}</p>
        <IoIosArrowDown className={`duration-200 ease-linear ${showBox ? "rotate-180" : "rotate-0"}`} />

      </div>
      <div className={`bg-white mainContainer duration-200 ease-linear overflow-hidden ${showBox ? "h-[300px]" : "h-0"}`}>

      </div>
    </>
  )
}
