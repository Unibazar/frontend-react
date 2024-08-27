import Link from "next/link";

export default function ListProductPage() {
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
    </div>
  )
}
