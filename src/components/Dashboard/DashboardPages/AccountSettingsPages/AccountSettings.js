import DropDownBox from "./AccountSetting-Components/DropDownBox";



export default function AccountSettings() {
  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Account Setting</h1>
      </div>

      <DropDownBox title={"personal infomation"}/>
      <DropDownBox title={"business infomation"}/>
      <DropDownBox title={"subscription plan"}/>
      <DropDownBox title={"linked platform"}/>
    </div>
  )
}
