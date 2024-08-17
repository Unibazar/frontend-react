import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const ContactInput = () => {
  return (
    <>
      <div className="contact-input">
        
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <TextField id="standard-basic" label="First Name" variant="standard" />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField id="standard-basic" label="E-mail" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />
        </Box>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Select subject ?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
           <FormControlLabel value="General Inquiry" control={<Radio />} label="General Inquiry" />
           <FormControlLabel value="General Inquiry" control={<Radio />} label="General Inquiry" />
           <FormControlLabel value="General Inquiry" control={<Radio />} label="General Inquiry" />
           <FormControlLabel value="General Inquiry" control={<Radio />} label="General Inquiry" />
        </RadioGroup>
        <Button type='button'>Submit</Button>
        </FormControl>
      </div>
    </>
  )
}

export default ContactInput