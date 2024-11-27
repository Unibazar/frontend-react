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

export default function TableLayout({ tableData }) {
  return (
    <>
      <div className="overflow-x-auto w-full shadow-md rounded-md">
        <table className="mainContainer rounded-md w-full">
          <thead className="MainHeader bg-zinc-100 text-zinc-500">
            <tr className="text-xs md:text-lg">
              <th className="p-2">Image</th>
              {/* <th className="p-2">SKU</th> */}
              <th className="p-2">Product Name</th>
              <th className="p-2">Product Type</th>
              {/* <th className="p-2">Condition</th> */}
              <th className="p-2">Marketplace ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Last Updated Date</th>

            </tr>
          </thead>

          {tableData?.items?.length > 0 ? (
            <tbody className="rowsContainer">
              {tableData?.items?.map((item, index) => (
                <tr key={index} className="border-t-2 text-xs md:text-lg cursor-pointer hover:bg-zinc-100">
                  <td className="py-3 px-2 text-center">{item.summaries?.[0]?.mainImage?.link ? <div className="w-16 h-16 rounded-xl overflow-hidden"> <img src={item.summaries?.[0]?.mainImage?.link} alt="Product" className="w-full h-full"/> </div> : 'N/A'}</td>
                  {/* <td className="py-3 px-2">{item.sku}</td> */}
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center col-span-3 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <p className="uppercase border-2 rounded-full px-2 text-xs md:text-sm text-[#CC6D02] border-[#FFE7CC]">{item.sku}</p>
                        <h1>{item.summaries?.[0]?.itemName.slice(0,28) || 'N/A'}</h1>
                        <p className="text-[#207A7A]">{item.summaries?.[0]?.conditionType || 'N/A'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.productType || 'N/A'}</td>
                  {/* <td className="py-3 px-2">{item.summaries?.[0]?.conditionType || 'N/A'}</td> */}
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
    </>
  );
}
