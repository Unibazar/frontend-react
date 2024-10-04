
import Card from './Card';

export default function CardLayout({data}) {
    
    

    return (
        <div className='border-2 rounded-md w-full'>
            <div className='p-4 border-b-2'>
                <h1 className='font-semibold'>17 OCT, 2024</h1>
            </div>
            {data.length>0?<div className='cardContiner py-4 flex gap-4 flex-wrap px-2'>
                {[...data].reverse().map(item => (
                    <Card key={item._id} item={item} />
                ))}
            </div>:<h1>No Products to show</h1>}
        </div>
    )
}
