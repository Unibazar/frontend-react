// import OrderListPage from '@/components/Dashboard/DashboardPages/OrderPages/OrderListPage';
import { Box } from '@mui/material';
import Head from 'next/head';
// import OrderListPage from '../../components/Dashboard/DashboardPages/OrdersPages/OrderListPage';

function Overview() {
  return (
    <>
      <Head>
        <title>Dashboard-Overview | Unibazar</title>
        <meta name="description" content="Unibazar is an online platform used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <div className="w-full px-4 py-4 md:px-7 md:py-7">
            <div className='title flex flex-wrap items-center'>
              <h1 className='md:text-3xl text-lg font-semibold '>Dashboard</h1>
            </div>

            <div className="boxes flex gap-5 mt-10 flex-wrap">
              <Box title="Total Session" count="40,689" bgColor="#E4E4FF" textColor="#8280FF" description="Logo up from yesterday" Icon={FaUserGroup}/>

              <Box title="Total Order" count="10,399" bgColor="#FEF2D6" textColor="#FEC53D" description="Logo up from yesterday" Icon={RiBox3Fill} textSize="3xl"/>

              <Box title="Total Sales" count="$89,000" bgColor="#D9F7E7" textColor="#4AD991" description="Logo up from yesterday" Icon={GoGraph} textSize="2xl"/>

              <Box title="Total Pending" count="2040" bgColor="#FFDED2" textColor="#FFA583" description="Logo up from yesterday" Icon={GiBackwardTime} textSize="3xl"/>
            </div>

            {/* <div className="chart bg-white mt-10 rounded-lg overflow-hidden w-full">
              <h1 className="md:text-2xl font-semibold m-5 mb-0">Sales Details</h1>
              <LineChart className="w-full p-2"
                height={400}
                series={[
                  { data: pData, label: 'pv' },
                  { data: uData, label: 'uv' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}

                grid={{ horizontal: true }}
              />
            </div> */}

          </div>
    </>
  );
}

export default Overview;