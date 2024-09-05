import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function Card() {
  return (
    <div class="flex flex-col text-gray-700 bg-white overflow-hidden rounded-sm border-2 max-w-[270px]">
        <div class="text-white">
            <img src="https://img.freepik.com/free-photo/3d-beauty-product-studio_23-2151401472.jpg" alt="card-image" className='w-full h-full object-cover'/>
        </div>
        <div class="py-3 px-4">
            <div class="mb-2 flex text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p className='text-black'>43</p>
            </div>
            <p class="block font-sans text-base">
                The place is close to Barceloneta Beach and bus stop just 2 min by walk
            </p>
            <div class="flex justify-between items-center pt-2">
                <p className='text-blue-500'>$342</p>
                <button class=" py-1 px-4 rounded-sm bg-zinc-200 text-black font-semibold" type="button">
                    Edit
                </button>
            </div>
        </div>
    </div>
  )
}
