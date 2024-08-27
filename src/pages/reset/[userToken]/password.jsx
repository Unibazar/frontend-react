import ResetPassword from '@/components/Auth/resetPassword/ResetPassword';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'


const Password = () => {
    const router = useRouter();
    const { userToken } = router.query
    return (
        <div>
            <Head>
                <title>Reset | Unibazar</title>
                <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
            </Head>
            <ResetPassword userToken={userToken} />
        </div>
    )
}

export default Password
