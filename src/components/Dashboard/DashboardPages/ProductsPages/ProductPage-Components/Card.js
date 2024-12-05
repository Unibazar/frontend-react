import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

export default function Card({ item }) {
  
  return (
    <div className="flex flex-col text-gray-700 bg-white overflow-hidden rounded-sm border-2 max-w-[270px]">
      {/* image part  */}
      <div className="text-white">
        {item.summaries?.[0]?.mainImage?.link ? <Image src={item.summaries?.[0]?.mainImage?.link} alt="card-image" className="w-full h-[200px] object-contain" width={140} height={140} />: <Image src="https://images.unsplash.com/photo-1626104853886-8f06aed1bec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8MHwwfHx8MA%3D%3D" alt="card-image" className="w-full h-[200px] object-contain" width={140} height={140} />} 
      </div>

      {/* description part  */}
      <div className="py-3 px-4 flex flex-col justify-between h-full">
        <div className='header'>
          {/* <div className="mb-2 flex text-yellow-500">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p className="text-black">reiews</p>
          </div> */}
          <div className='details'>
            <h1> <span className="font-bold">Name:</span> {item.summaries?.[0]?.itemName || 'N/A'}</h1>
            <h1><span className="font-bold">SKU:</span> {item.sku || 'N/A'}</h1>
            <h1><span className="font-bold">Condition:</span> {item.summaries?.[0]?.conditionType || 'N/A'}</h1>
            <h1><span className="font-bold">Type:</span> {item.summaries?.[0]?.productType || 'N/A'}</h1>
            <h1><span className="font-bold">Market Place ID:</span> {item.summaries?.[0]?.marketplaceId || 'N/A'}</h1>
            <h1><span className="font-bold">ASIN:</span> {item.summaries?.[0]?.asin || 'N/A'}</h1>
            <h1><span className="font-bold">Status:</span> {item.summaries?.[0]?.status?.join(', ') || 'N/A'}</h1>
            <h1><span className="font-bold">Created At:</span> {new Date(item.summaries?.[0]?.createdDate).toLocaleDateString('en-GB') || 'N/A'}</h1>
            <h1><span className="font-bold">Updated At:</span> {new Date(item.summaries?.[0]?.lastUpdatedDate).toLocaleDateString('en-GB') || 'N/A'}</h1>
          </div>
        </div>
        <div className="footer flex justify-between items-center pt-2 ">
          <p className="text-blue-500">price</p>
          <button className=" py-1 px-4 rounded-sm bg-zinc-200 text-black font-semibold" type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
