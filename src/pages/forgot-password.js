import ForgotPassword from '../components/Auth/ForgotPassword/ForgotPassword.js';
import Head from 'next/head.js';
export default function Forgotpassword(){
  return(
    <div>
       <Head>
        <title>Sign in | Forgot password | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <ForgotPassword/>
    </div>
  );
}