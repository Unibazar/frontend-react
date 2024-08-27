import Head from 'next/head';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

function orderlist() {
  return (
    <>
    <Head>
        <title>Dashboard-OrderList | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
    </Head>
    <DashboardLayout>
        <div>orderList</div>
    </DashboardLayout>
    </>
  )
}

export default orderlist