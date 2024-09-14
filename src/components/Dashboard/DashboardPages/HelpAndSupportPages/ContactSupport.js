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

export default function ContactSupport() {
  const [value, setValue] = useState('contactSupport');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="h-full w-full  px-4 py-4 md:px-7 md:py-7">

      <div className="title flex flex-wrap justify-between items-center">
        <h1 className="md:text-3xl text-lg font-semibold ">Help & Support - {value}</h1>
      </div>
      <Box className="mt-5 p-0 bg-white rounded-lg">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Contact Support" value="contactSupport" />
              <Tab label="Live Chat" value="liveChat" />
              <Tab label="F&Q" value="FAQ" />
            </TabList>
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
