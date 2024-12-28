import React from 'react';



function Box({ title, count, bgColor, textColor, description , Icon , textSize }) {
    return (
        <div className="box bg-white p-4 rounded-xl">
            <div className="flex justify-between gap-10">
                <div className="left space-y-4">
                    <h1 className="text-xl font-semibold ">{title}</h1>
                    <h1 className="text-2xl font-bold text-green-600">{count}</h1>
                </div>
                <div className={`right  w-12 h-12 flex justify-center items-center  rounded-full bg-[${bgColor}]`}>
                {Icon && <Icon className={`text-[${textColor}] text-${textSize ? textSize : "xl"}`} />}
                </div>
            </div>
            <p className="mt-4">{description}</p>
        </div>
    )
}

export default Box