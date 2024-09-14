import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function Card({ item }) {
  
  return (
    <div class="flex flex-col text-gray-700 bg-white overflow-hidden rounded-sm border-2 max-w-[270px]">
      {/* image part  */}
      <div class="text-white">
        <img src={item.imageUrl} alt="card-image" className="w-full h-[200px] object-contain" />
      </div>

      {/* description part  */}
      <div class="py-3 px-4 flex flex-col justify-between h-full">
        <div className='header'>
          <div className="mb-2 flex text-yellow-500">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p className="text-black">{item.reviews}</p>
          </div>
          <p class="block font-sans text-base">{item.description.slice(0,50)}...</p>
        </div>
        <div class="footer flex justify-between items-center pt-2 ">
          <p className="text-blue-500">{item.price}</p>
          <button class=" py-1 px-4 rounded-sm bg-zinc-200 text-black font-semibold" type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
