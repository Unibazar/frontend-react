import React,{useEffect} from 'react'
import { loadUser } from '@/redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const ComparePlan = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
 
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <div className="w-full py-5 md:mt-5 ">
        <div className='w-full items-center justify-center flex'>
          <p className='font-bold text-xl'>Our Pricing</p>
        </div>
        <div className="w-full items-center justify-center px-5 py-10 overflow-y-auto">
          <Table className='w-auto outline outline-2 outline-gray-100'>
            <TableHead>
              <TableRow className='justify-around'>
                <TableCell className='text-left outline outline-1 outline-gray-100 w-1/4'>
                  <div className='w-full '>
                    <p className='text-xl font-bold'>Compare Plans</p>
                    <p className='text-sm text-gray font-normal'>Choose your workspace plan according to<br /> your organisational plan</p>
                  </div>
                </TableCell>
                <TableCell className='text-left outline outline-1 outline-gray-100 w-1/4'>
                  <div className='w-full justify-center items-center flex flex-col p-5'>
                    <p className='text-lg font-normal'>Free</p>
                    <p className='text-lg  font-bold'>$0 <span className='font-normal'>/month</span></p>
                  </div>
                  {!user?.user.verified &&
                  <button type='button' className='bg-teal-600 w-full text-center rounded py-2 text-white'>
                    Sign Up for Free
                  </button>
                  }
                </TableCell>
                <TableCell className='text-left outline outline-1 outline-gray-100 w-1/4'>
                  <div className='w-full justify-center items-center flex flex-col p-5'>
                    <p className='text-lg font-normal'>Pro</p>
                    <p className='text-lg  font-bold'>$10 <span className='font-normal'>/month</span></p>
                  </div>
                  <button type='button' className='bg-teal-600 hover:bg-teal-800 w-full text-center rounded py-2 text-white'>
                    Upgrade to Pro
                  </button>
                </TableCell>
                <TableCell className='text-left outline outline-1 outline-gray-100 w-1/4'>
                  <div className='w-full justify-center items-center flex flex-col p-5'>
                    <p className='text-lg font-normal'>Enterprise</p>
                    <p className='text-lg  font-bold'>Custom</p>
                  </div>
                  <button type='button' className='bg-teal-600 hover:bg-teal-800 w-full text-center rounded py-2 text-white'>
                    Contact Us
                  </button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className='min-w-[250px] outline outline-1 outline-gray-100 text-left'>
                  Number of Linked Platforms
                </TableCell>
                <TableCell className='text-center min-w-[250px] outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>3</div>
                </TableCell>
                <TableCell className='text-center min-w-[250px] outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>5</div>
                </TableCell>
                <TableCell className='text-center min-w-[250px] outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Unlimited</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Product Management Limit
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>50</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>500</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Unlimited</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Dashboard Access
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Basic</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Advance</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Full</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Real-Time Analytics
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>No</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Inventory Management
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>No</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Customer Support Level
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Basic</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Priority</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Premium</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Customizable Reports
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>No</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-left outline outline-1 outline-gray-100 '>
                  Dedicated Account Manager
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>No</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>No</div>
                </TableCell>
                <TableCell className='text-center outline outline-1 outline-gray-100 '>
                  <div className='w-full text-center justify-center justify-items-center items-center flex '>Yes</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default ComparePlan
