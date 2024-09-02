import Image from "next/image";
import NotFoundPage from '../assets/404/404.jpg'
import Link from "next/link";
import Head from "next/head";

export default function NotFound(){
  return (
    <div>
      <Head>
        <title>404 Page not found | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <div className='w-full h--full flex justify-center justify-items-center items-center'>
        <div className='w-full flex justify-center justify-items-center items-center flex-col md:mt-5 mt-60'>
          <div className='w-full flex justify-center'>
            <Image src={NotFoundPage} alt='NotFoundPage' className="md:w-1/2 w-96"></Image>
          </div>
          <h2 className="text-center text=2xl text-gray-400">OOPS! we can't find page you are looking for </h2>
          <div className='w-full flex justify-center p-5'>
            <Link href='/'><button type="button" className="px-2 py-2 rounded text-white bg-teal-600 hover:bg-teal-800 text-normal font-bold">Back To Home </button></Link>
          </div>
        </div>
      </div>
    </div>
  );  
}