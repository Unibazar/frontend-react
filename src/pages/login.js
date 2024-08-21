import Signin from '../components/Auth/Signin/Signin.js';
import Head from 'next/head.js';
export default function SignIn(){
  return(
    <div>
       <Head>
        <title>Log in | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <Signin/>
    </div>
  );
}