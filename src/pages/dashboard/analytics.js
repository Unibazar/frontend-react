import Head from "next/head";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";


export default function analytics() {
    return (
        <>
            <Head>
                <title>Dashboard-Analytics | Unibazar</title>
                <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
            </Head>
            <DashboardLayout>
                <div>analytics</div>
            </DashboardLayout>
        </>
    )
}
