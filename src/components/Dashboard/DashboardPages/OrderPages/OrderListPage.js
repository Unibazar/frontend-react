import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '@/redux/slice/orderSlice';
import OrderTableLayout from './OrderTableLayout';
import Loader from '@/components/Loader/Loader';

export default function OrderListPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { orders, isLoading, error } = useSelector((state) => state.orders);
console.log(orders?.orders?.payload?.Orders,"orders")
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-full w-full px-4 py-4 md:px-7 md:py-7">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold'>Orders</h1>
      </div>

      <div className="boxs flex mt-7 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
        <OrderTableLayout orderData={orders?.orders?.payload?.Orders || []} />
      </div>
    </div>
  );
}

