import React from 'react'
import Image from 'next/image';
import { Box, TextField, Button } from '@mui/material';
import LettersendImg from '../../../../assets/unibazar-contactus-images/letter_send.png'
const ContactInput = () => {
  return (
    <>
      <div className="p-3 w-full">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
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
        <div className='w-full items-start justify-items-start text-start  pl-4 pt-8'>
          <p className='text-normal font-bold p-3 '>Select Subject ?</p>
          <div className='w-full flex md:flex-row flex-col justify-around'>
            <input
              type="radio"
              name='service'
              value="General inquiry1"
            />General inquiry1
            <input
              type="radio"
              name='service'
              value="General inquiry2"
            />General inquiry2
            <input
              type="radio"
              name='service'
              value="General inquiry3"
            />General inquiry3
          </div>
        </div>
        <div className='w-full flex items-start justify-items-start pl-6 pt-8 '>
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
        <div className='w-full flex justify-items-end justify-end pt-3'>
          <Button
            type="submit"
            className='px-2 py-2 flex text-white bg-teal-700 rounded hover:bg-teal-800  '
          >
            Send Message
          </Button>
        </div>
        <div className='w-full flex justify-items-end justify-end'>
         <Image src={LettersendImg} alt='letter-send-img'></Image>
        </div>
      </div>
    </>
  );
};

export default ContactInput;