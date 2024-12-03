// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { TiStar } from "react-icons/ti";
// import { CgSortAz } from "react-icons/cg";


// export default function TableLayout({ tableData }) {
//     return (
//         <>
//         <div className="overflow-x-auto w-full shadow-md  rounded-md">
//             <table className="mainContainer rounded-md w-full">
//                 <thead className="MainHeader bg-zinc-100 text-zinc-500 ">
//                     <tr className="text-xs md:text-lg">
//                         <th className="p-2">
//                             <div className="flex items-center gap-2 font-semibold">
//                                 <MdKeyboardArrowRight className="text-black" />
//                                 <h1>Product Name</h1>
//                                 <CgSortAz className="text-2xl" />
//                             </div>
//                         </th>

//                         <th className="p-2">
//                             <div className="flex items-center gap-1 font-semibold">
//                                 <h1>Start Date</h1>
//                                 <CgSortAz className="text-2xl" />
//                             </div>
//                         </th>

//                         <th className="p-2">
//                             <div className="flex items-center gap-1 font-semibold">
//                                 <h1>Last Modified</h1>
//                                 <CgSortAz className="text-2xl" />
//                             </div>
//                         </th>

//                         <th className="p-2">
//                             <div className="flex items-center gap-1 font-semibold">
//                                 <h1>Status</h1>
//                                 <CgSortAz className="text-2xl" />
//                             </div>
//                         </th>

//                         <th className="font-semibold p-2">
//                             <h1>Quanlity</h1>
//                         </th>

//                         <th className="font-semibold p-2">
//                             <h1>Actions</h1>
//                         </th>
//                     </tr>
//                 </thead>

//                 {tableData.length >0 ?<tbody className="rowsContainer">
//                     {tableData.map(item => (
//                         <tr key={item._id} className="border-t-2 text-xs md:text-lg">
//                             <td className="py-3 px-2 ">
//                                 <div className="flex items-center col-span-3 gap-2">
//                                     <MdKeyboardArrowRight className="text-black" />
//                                     <div className="flex flex-col items-center">
//                                         <p className="uppercase border-2 rounded-full px-2 text-xs md:text-sm text-[#CC6D02] border-[#FFE7CC]">{item.product?.type}</p>
//                                         <h1>{item?.itemName}</h1>
//                                         <p className="text-[#207A7A]">{item.product?.details}</p>
//                                     </div>
//                                 </div>
//                             </td>

//                             <td className="py-3 px-2">
//                                 <p>{new Date(item?.createdAt).toLocaleDateString('en-GB')}</p>
//                             </td>

//                             <td className="py-3 px-2">
//                                 <p>{new Date(item?.updatedAt).toLocaleDateString('en-GB')}</p>
//                             </td>

//                             <td className="py-3 px-2">
//                                 <p>{item?.status}</p>
//                             </td>

//                             <td className="py-3 px-2 text-center">
//                                 <p>{item?.inventoryCount}</p>
//                             </td>

//                             <td className="py-3 px-2">
//                                 <div className="flex items-center justify-center gap-2 text-xl">
//                                     <HiOutlineDotsHorizontal />
//                                     <TiStar className="text-yellow-400" />
//                                 </div>
//                             </td>

//                         </tr>
//                     ))}
//                 </tbody>
//                     :
//                     <div className="boxs flex gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
//                       <h1 className="capitalize">no more products to show !</h1>
//                     </div>
//                 }
//             </table>
//         </div>
//         </>
//     )
// }


import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';
import { CgSortAz } from 'react-icons/cg';
import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import Image from 'next/image';

export default function TableLayout({ tableData }) {

  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetails, setProductDetails] = useState("");


  const handleClickOpen = (item) => {
    setShowProductDetail(true);
    setProductDetails(item);
  };

  const handleClose = () => {
    setShowProductDetail(false);
  };
  return (
    <>
      <div className="overflow-x-auto w-full shadow-md rounded-md">
        <table className="mainContainer rounded-md w-full">
          <thead className="MainHeader bg-zinc-100 text-zinc-500">
            <tr className="text-xs md:text-lg">
              <th className="p-2">Image</th>
              <th className="p-2">Product Name</th>
              <th className="p-2">Product Type</th>
              <th className="p-2">Marketplace ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Last Updated Date</th>

            </tr>
          </thead>

          {tableData?.items?.length > 0 ? (
            <tbody className="rowsContainer">
              {tableData?.items?.map((item, index) => (
                <tr key={index} className="border-t-2 text-xs md:text-lg cursor-pointer hover:bg-zinc-100" onClick={() => handleClickOpen(item)}>
                  <td className="py-3 px-2 text-center">{item.summaries?.[0]?.mainImage?.link ? <div className="w-16 h-16 rounded-xl overflow-hidden"> <Image src={item.summaries?.[0]?.mainImage?.link} alt="Product" className="w-full h-full" height={180} width={180} /> </div> : 'N/A'}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center col-span-3 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <p className="uppercase border-2 rounded-full px-2 text-xs md:text-sm text-[#CC6D02] border-[#FFE7CC]">{item.sku}</p>
                        <h1 className='whitespace-nowrap'>{item.summaries?.[0]?.itemName.slice(0, 28) || 'N/A'}</h1>
                        <p className="text-[#207A7A]">{item.summaries?.[0]?.conditionType || 'N/A'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.productType || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.marketplaceId || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.status?.join(', ') || 'N/A'}</td>

                  <td className="py-3 px-2">{new Date(item.summaries?.[0]?.createdDate).toLocaleDateString('en-GB') || 'N/A'}</td>
                  <td className="py-3 px-2 text-center">{new Date(item.summaries?.[0]?.lastUpdatedDate).toLocaleDateString('en-GB') || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="boxs flex gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
              <h1 className="capitalize">No more products to show!</h1>
            </div>
          )}
        </table>
      </div>

      <Dialog onClose={handleClose} open={showProductDetail}>
        <DialogTitle>Product Detail</DialogTitle>
        <div className='p-1 w-full flex flex-col '>
        <div className='flex p-5 gap-4 flex-col md:flex-row'>
          <div>
            {productDetails.summaries?.[0]?.mainImage?.link ? <div className="w-56 h-56 rounded-xl overflow-hidden"> <Image src={productDetails.summaries?.[0]?.mainImage?.link} alt="Product" className="w-full h-full object-contain" height={180} width={180}/> </div> : 'N/A'}
          </div>
          <div className='details'>
            <h1> <span className="font-bold">Product Name:</span> {productDetails.summaries?.[0]?.itemName || 'N/A'}</h1>
            <h1><span className="font-bold">Product SKU:</span> {productDetails.sku || 'N/A'}</h1>
            <h1><span className="font-bold">Product Condition:</span> {productDetails.summaries?.[0]?.conditionType || 'N/A'}</h1>
            <h1><span className="font-bold">Product Type:</span> {productDetails.summaries?.[0]?.productType || 'N/A'}</h1>
            <h1><span className="font-bold">Market Place ID:</span> {productDetails.summaries?.[0]?.marketplaceId || 'N/A'}</h1>
            <h1><span className="font-bold">ASIN:</span> {productDetails.summaries?.[0]?.asin || 'N/A'}</h1>
            <h1><span className="font-bold">Status:</span> {productDetails.summaries?.[0]?.status?.join(', ') || 'N/A'}</h1>
            <h1><span className="font-bold">Created At:</span> {new Date(productDetails.summaries?.[0]?.createdDate).toLocaleDateString('en-GB') || 'N/A'}</h1>
            <h1><span className="font-bold">Updated At:</span> {new Date(productDetails.summaries?.[0]?.lastUpdatedDate).toLocaleDateString('en-GB') || 'N/A'}</h1>
          </div>
        </div>
        <button type="button" onClick={handleClose} class="w-fit mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
        </div>
      </Dialog>
    </>
  );
}
