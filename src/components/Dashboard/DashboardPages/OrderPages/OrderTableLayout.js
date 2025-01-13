import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import Image from 'next/image';

export default function OrderTableLayout({ orderData }) {
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleClickOpen = (order) => {
    setShowOrderDetail(true);
    setOrderDetails(order);
  };

  const handleClose = () => {
    setShowOrderDetail(false);
  };

  return (
    <>
      <div className="overflow-x-auto w-full shadow-md rounded-md">
        <table className="mainContainer rounded-md w-full">
          <thead className="MainHeader bg-zinc-100 text-zinc-500">
            <tr className="text-xs md:text-lg">
              <th className="p-2">Order ID</th>
              <th className="p-2">Purchase Date</th>
              <th className="p-2">Order Status</th>
              <th className="p-2">Total Amount</th>
              <th className="p-2">Payment Method</th>
            </tr>
          </thead>

          {orderData?.length > 0 ? (
            <tbody className="rowsContainer">
              {orderData?.map((order, index) => (
                <tr key={index} className="border-t-2 text-xs md:text-lg cursor-pointer hover:bg-zinc-100" onClick={() => handleClickOpen(order)}>
                  <td className="py-3 px-2 text-center">{order?.AmazonOrderId}</td>
                  <td className="py-3 px-2">{new Date(order?.PurchaseDate).toLocaleDateString('en-GB')}</td>
                  <td className="py-3 px-2">{order?.OrderStatus}</td>
                  <td className="py-3 px-2">{`${order?.OrderTotal?.CurrencyCode} ${order?.OrderTotal?.Amount}`}</td>
                  <td className="py-3 px-2">{order?.PaymentMethod}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr>
              <td colSpan={5} className="py-3 px-2 text-center">No orders to show</td>
            </tr>
          )}
        </table>
      </div>
{orderDetails &&

      <Dialog  onClose={handleClose} open={showOrderDetail}>
        <DialogTitle>Order Detail of {orderDetails?.AmazonOrderId} for platform  {orderDetails?.SalesChannel}</DialogTitle>
        {orderDetails && (
          <div className='p-5 w-full flex flex-col'>
            {/* <h1><span className="font-bold">Platform:</span> {orderDetails.SalesChannel}</h1>
            <h1><span className="font-bold">Order ID:</span> {orderDetails.AmazonOrderId}</h1> */}
            <h1><span className="font-bold">Purchase Date:</span> {new Date(orderDetails.PurchaseDate).toLocaleString('en-GB')}</h1>
            <h1><span className="font-bold">Order Status:</span> {orderDetails.OrderStatus}</h1>
            <h1><span className="font-bold">Total Amount:</span> {`${orderDetails.OrderTotal.CurrencyCode} ${orderDetails.OrderTotal.Amount}`}</h1>
            {/* <h1><span className="font-bold">Buyer Name:</span> {orderDetails.buyerInfo.buyerName}</h1> */}
            <h1><span className="font-bold">Payment Method:</span> {orderDetails.PaymentMethod}</h1>
            <div className='flex'>

            <h1><span className="font-bold">Earliest Delivery Date:</span> {new Date(orderDetails.EarliestDeliveryDate).toLocaleString('en-GB')}</h1>
            <h1><span className="font-bold">Earliest Shipping Date:</span> {new Date(orderDetails.EarliestShipDate).toLocaleString('en-GB')}</h1>
            </div>
            {/* <h1><span className="font-bold">Shipping Address:</span> {orderDetails.shippingAddress.addressLine1}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.stateOrRegion}, {orderDetails.shippingAddress.postalCode}</h1> */}
            <button type="button" onClick={handleClose} className="w-fit mx-auto mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">Close</button>
          </div>
        )}
      </Dialog>
}
    </>
  );
}

