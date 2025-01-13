import { getOrders } from '@/redux/slice/productOrderSlice';
import { loadUser } from '@/redux/slice/userSlice';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function orderlist() {
  const dispatch = useDispatch();
  const {orders} = useSelector(state=>state.orders);
  
  const [Orders, setOrders] = useState([]);  


  useEffect(() => {
    dispatch(loadUser()).then(data=>{
      dispatch(getOrders());
    })
  }, [dispatch]);

  useEffect(() => {
    setOrders(orders?.orders?.payload?.Orders || []);
  }, [orders])
  

  return (
    <>
    <Head>
        <title>Dashboard-OrderList | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
    </Head>
  
        {Orders.length>0 ? <div>orderList</div> : <div>no orders</div>}
  
    </>
  )
}

export default orderlist