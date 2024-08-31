import Head from "next/head";
import AddProductPage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-AddPage";
import ListProductPage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-ListPage";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { useSearchParams } from "next/navigation"
import ProductHomePage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-HomePage";


function Products() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  return (
    <>
    <Head>
        <title>Dashboard-Products | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
    </Head>
      <DashboardLayout>
        {!query && <ProductHomePage/>}
        {query == "list" && <ListProductPage /> }
        {query =="add-product" &&  <AddProductPage />}
      </DashboardLayout>
    </>
  )
}

export default Products
