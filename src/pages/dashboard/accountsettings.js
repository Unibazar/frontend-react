import Head from "next/head";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import AccountSettings from "../../components/Dashboard/DashboardPages/AccountSettingsPages/AccountSettings";


export default function accountsettings() {
  return (
    <>
      <Head>
        <title>Dashboard-Settings | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <DashboardLayout>
        <AccountSettings/>
      </DashboardLayout>
    </>
  )
}
