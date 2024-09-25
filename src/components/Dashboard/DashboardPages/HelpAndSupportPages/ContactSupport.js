'use client';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import UserForm from './HelpAndSupport-Componets/UserForm';
import LiveChat from './HelpAndSupport-Componets/LiveChat';
import HelpAndSupportFAQ from './HelpAndSupport-Componets/HelpAndSupport-FAQ';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function ContactSupport() {
  const [value, setValue] = useState('contactSupport');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const [select, setSelect] = useState('');

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
    setValue(event.target.value);

  };


  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">

      <div className="title flex flex-wrap justify-between items-center">
        <h1 className="md:text-3xl text-lg font-semibold ">Help & Support - {value}</h1>
      </div>
      <Box className="mt-5 p-0 bg-white rounded-lg">
        <TabContext value={value}>
          {/* for bigger screens  */}
          <Box className="hidden sm:block" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Contact Support" value="contactSupport" />
              <Tab label="Live Chat" value="liveChat" />
              <Tab label="F&Q" value="FAQ" />
            </TabList>
          </Box>

          {/* for mobile screen  */}
          <Box className="sm:hidden">
            <FormControl fullWidth>
              <InputLabel id="select-label" className='w-full'>Help</InputLabel>
              <Select
                labelId="select-label"
                value={select}
                label="Age"
                onChange={handleSelectChange}
              >
                <MenuItem value="contactSupport">Contact Support</MenuItem>
                <MenuItem value="liveChat">Live Chat</MenuItem>
                <MenuItem value="FAQ">F&Q</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TabPanel value="contactSupport">
            <UserForm />
          </TabPanel>
          <TabPanel value="liveChat">
            <LiveChat />
          </TabPanel>
          <TabPanel value="FAQ">
            <HelpAndSupportFAQ />
          </TabPanel>
        </TabContext>
      </Box>



    </div>
  );
}
