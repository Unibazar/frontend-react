import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react';
import BusinessInfomationForm from './BusinessInfomationForm';



export default function BusinessInformation() {
  const [platform, setPlatform] = useState('amazon');

  const handleChangePlatform = (event, newValue) => {
    setPlatform(newValue);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg p-5 w-full gap-2 flex flex-col">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={platform}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChangePlatform} aria-label="lab API tabs example">
                <Tab label="Amazon" value="amazon" />
                <Tab label="Meesho" value="meesho" />
                <Tab label="Other" value="other" />
              </TabList>
            </Box>
            <TabPanel value="amazon">
              <BusinessInfomationForm platform={platform} />
            </TabPanel>
            <TabPanel value="meesho">
              <BusinessInfomationForm platform={platform} />
            </TabPanel>
            <TabPanel value="other">We Are Working On It</TabPanel>
          </TabContext>
        </Box>

      </div>
    </div>
  );
}
