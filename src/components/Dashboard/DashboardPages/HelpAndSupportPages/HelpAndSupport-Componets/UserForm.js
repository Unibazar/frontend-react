import { FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';


export default function UserForm() {
    const [queryData, setQueryData] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setQueryData(Object.fromEntries(formData.entries()));
    console.log(queryData);
  };
  return (
    <div className="boxs bg-white rounded-lg">
        <h1 className="text-2xl font-semibold">Contact Support</h1>

        {/* user form  */}
        <form className="p-4 mt-5 space-y-10" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <InputLabel htmlFor="FirstName">Frist Name</InputLabel>
              <Input id="FirstName" type="text" className="w-full md:w-3/4" name="firstName" />
            </div>
            <div className="flex-1">
              <InputLabel htmlFor="LastName">Last Name</InputLabel>
              <Input id="LastName" type="text" className="w-full md:w-3/4" name="lastName" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <InputLabel htmlFor="Email">Email</InputLabel>
              <Input id="Email" type="email" className="w-full md:w-3/4" name="Email" />
            </div>
            <div className="flex-1">
              <InputLabel htmlFor="Number">Phone Number</InputLabel>
              <Input id="Number" type="number" className="w-full md:w-3/4" name="phoneNumber" />
            </div>
          </div>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup name="queryType">
                <div className="flex flex-wrap">
                  <FormControlLabel value="generalQuery1" control={<Radio />} label="General Query" />
                  <FormControlLabel value="generalQuery2" control={<Radio />} label="General Query" />
                  <FormControlLabel value="generalQuery3" control={<Radio />} label="General Query" />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
          <div className="mt-5">
            <InputLabel htmlFor="Message">Message</InputLabel>
            <Input id="Message" type="text" className="w-full md:w-2/3" name="message" placeholder="Write your message.." />
          </div>

          <button type="submit" className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center hover:bg-[#468582]">
            Send Message
          </button>
        </form>
    </div>
  )
}
