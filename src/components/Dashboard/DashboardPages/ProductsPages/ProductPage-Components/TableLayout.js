import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';
import { CgSortAz } from 'react-icons/cg';

export default function TableLayout({ tableData }) {
  return (
    <>
      <div className="overflow-x-auto w-full shadow-md rounded-md">
        <table className="mainContainer rounded-md w-full">
          <thead className="MainHeader bg-zinc-100 text-zinc-500">
            <tr className="text-xs md:text-lg">
              <th className="p-2">SKU</th>
              <th className="p-2">Product Name</th>
              <th className="p-2">Product Type</th>
              <th className="p-2">Condition</th>
              <th className="p-2">Marketplace ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">ASIN</th>
              <th className="p-2">Created Date</th>
              <th className="p-2">Last Updated Date</th>
              <th className="p-2">Image</th>
            </tr>
          </thead>

          {tableData.length > 0 ? (
            <tbody className="rowsContainer">
              {tableData.map((item, index) => (
                <tr key={index} className="border-t-2 text-xs md:text-lg">
                  <td className="py-3 px-2">{item.sku}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.itemName || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.productType || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.conditionType || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.marketplaceId || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.status?.join(', ') || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.asin || 'N/A'}</td>
                  <td className="py-3 px-2">{new Date(item.summaries?.[0]?.createdDate).toLocaleDateString('en-GB') || 'N/A'}</td>
                  <td className="py-3 px-2">{new Date(item.summaries?.[0]?.lastUpdatedDate).toLocaleDateString('en-GB') || 'N/A'}</td>
                  <td className="py-3 px-2">{item.summaries?.[0]?.mainImage?.link ? <img src={item.summaries?.[0]?.mainImage?.link} alt="Product" className="w-16 h-auto rounded-md" /> : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="boxs flex gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
              <h1 className="capitalize">No more products to show!</h1>
            </div>
          )}
        </table>
      </div>
    </>
  );
}
