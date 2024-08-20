import React from 'react'
import Image from 'next/image';
import { Box, TextField, Button } from '@mui/material';
import LettersendImg from '../../../../assets/unibazar-contactus-images/letter_send.png'
const ContactInput = () => {
  return (
    <>
      <div className=" w-full md:pr-28 p-5">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
        className='text-left justify-start justify-items-start'
        >
        
          <TextField
            id="first-name"
            name="firstName"
            label="First Name"
            variant="standard"
            placeholder="John"
          />
          <TextField
            id="last-name"
            name="lastName"
            label="Last Name"
            variant="standard"
            placeholder="Doe"
          />
          <TextField
            id="email"
            name="email"
            label="E-mail"
            variant="standard"
            placeholder="john.doe@example.com"
          />
          <TextField
            id="phone-number"
            name="phoneNumber"
            label="Phone Number"
            variant="standard"
            placeholder="(123) 456-7890"
          />
        </Box>
        <div className='w-full items-start justify-items-start text-start  pl-3 pt-8'>
          <p className='text-sm font-bold '>Select Subject ?</p>
          <div className='w-full flex md:flex-row text-sm gap-2  justify-start'>
         
            <input type="radio" id="option1" name="subject" value="General inquiry"/> General inquiry
            <input type="radio" id="option2" name="subject" value="General inquiry"/> General inquiry
            <input type="radio" id="option3" name="subject" value="General inquiry"/> General inquiry
            <input type="radio" id="option4" name="subject" value="General inquiry"/> General inquiry
          
          </div>
        </div>
        <div className='w-full flex items-start justify-items-start md:pr-20 pl-3 pt-8 '>
          <TextField
            id="message"
            name="message"
            label="write Message"
            variant="standard"
            placeholder="Your message here..."
            multiline
            rows={4}
            fullWidth
          />
        </div>
        <div className='w-full flex justify-items-end justify-end md:pr-20 pt-3'>
          <Button
            type="submit"
            className='px-4 py-2 flex text-white bg-teal-700 rounded hover:bg-teal-800  '
          >
            Send Message
          </Button>
        </div>
        <div className='w-full flex justify-items-end justify-end md:pr-20 pr-5'>
         <Image src={LettersendImg} alt='letter-send-img'></Image>
        </div>
      </div>
    </>
  );
};

export default ContactInput;