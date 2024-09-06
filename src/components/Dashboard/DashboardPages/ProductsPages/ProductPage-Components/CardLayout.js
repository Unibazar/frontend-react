import React from 'react'
import Card from './Card';
import CardsData from '../DummyData/CardsData';

export default function CardLayout() {
    return (
        <div className='border-2 rounded-md w-full'>
            <div className='p-4 border-b-2'>
                <h1 className='font-semibold'>17 OCT, 2024</h1>
            </div>
            <div className='cardContiner py-4 flex gap-4 flex-wrap px-2'>
                {CardsData.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
