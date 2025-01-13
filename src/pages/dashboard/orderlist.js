// import Head from 'next/head';


// import Head from "next/head";
// import AddProductPage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-AddPage";
// import ListProductPage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-ListPage";
// import { useRouter, useSearchParams } from "next/navigation"
// import ProductHomePage from "../../components/Dashboard/DashboardPages/ProductsPages/Product-HomePage";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { loadProduct } from "@/redux/slice/productSlice";
// import ProductForm from "@/components/Dashboard/DashboardPages/ProductsPages/AddProduct/AddProduct";
// import Loader from "@/components/Loader/Loader";


// function orderlist() {
//   const [ProductData, setProductData] = useState([]);
//   const [totalProducts, setTotalProducts] = useState(0);
//   const searchParams = useSearchParams();
//   const query = searchParams.get('q');
//   const [page, setPage] = useState(1);


//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { product , isLoading ,error } = useSelector((state) => state.product);

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [page, dispatch]);

//   useEffect(() => {
//     setProductData(product || []);
//     setTotalProducts(product?.numberOfResults);

//   }, [product])

//   useEffect(() => {
//     if (product && !query) {
//       router.push("products?q=list");
//     }
//   }, [product, query, router])







// // function orderlist() {
//   return (
//     <>
//     <Head>
//         <title>Dashboard-OrderList | Unibazar</title>
//         <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
//     </Head>
  
//         <div>orderList</div>
  
//     </>
//   )
// }

// export default orderlist

import OrderListPage from '@/components/Dashboard/DashboardPages/OrderPages/OrderListPage';
import Head from 'next/head';
// import OrderListPage from '../../components/Dashboard/DashboardPages/OrdersPages/OrderListPage';

function OrderList() {
  return (
    <>
      <Head>
        <title>Dashboard-OrderList | Unibazar</title>
        <meta name="description" content="Unibazar is an online platform used to sell your products from various E-commerce platforms." key="desc" />
      </Head>
      <OrderListPage />
    </>
  );
}

export default OrderList;

