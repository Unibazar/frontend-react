import React from 'react'
import Link from 'next/link';
 function AppButton({btnText}) {
  return (
    <div className="pt-3 p-3">
            <Link href="/register" className="w-60 h-16 px-4 py-3 text-center text-white text-lg font-thin bg-teal-600 rounded-lg hover:bg-teal-700 ">
              {btnText}
            </Link>
          </div>
  )
}

export default AppButton