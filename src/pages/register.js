import Register from '../components/Auth/Register/Register.js';
import Head from 'next/head.js';
export default function SignUp(){
  return(
    <div>
       <Head>
        <title>Register | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Register/>
    </div>
  );
}