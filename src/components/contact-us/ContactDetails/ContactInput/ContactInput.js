import React, { useState } from 'react';
import Image from 'next/image';
import { Box, TextField, Button } from '@mui/material';
import LettersendImg from '../../../../assets/unibazar-contactus-images/letter_send.png'
const ContactInput = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorObject = {};

    if (!firstName) {
      errorObject.firstName = 'First name is required';
    }
    if (!lastName) {
      errorObject.lastName = 'Last name is required';
    }
    if (!email) {
      errorObject.email = 'Email is required';
    }
    if (!phoneNumber) {
      errorObject.phoneNumber = 'Phone number is required';
    }
    if (!subject) {
      errorObject.subject = 'Subject is required';
    }
    if (!message) {
      errorObject.message = 'Message is required';
    }

    if (Object.keys(errorObject).length > 0) {
      setError(errorObject);
    } else {
      // Form is valid, you can send the data to the server or perform any other action
      console.log('Form is valid');
    }
  };


  return (
    <>
      <div className=" w-full md:mt-0 mt-16 md:pr-28 p-5">
        <Box
          component="form"
          className='text-left justify-start justify-items-start w-full '
          onSubmit={handleSubmit}

        >
          <div className='w-full gap-4 flex flex-wrap'>
            <TextField
              id="first-name"
              name="firstName"
              label="First Name"
              variant="standard"
              placeholder="John"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              error={error.firstName ? true : false}
              helperText={error.firstName}
              className='md:m-2'
            />
            <TextField
              id="last-name"
              name="lastName"
              label="Last Name"
              variant="standard"
              placeholder="Doe"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              error={error.lastName ? true : false}
              helperText={error.lastName}
              className='md:m-2'
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="standard"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={error.email ? true : false}
              helperText={error.email}
              className='md:m-2'
            />
            <TextField
              id="phone-number"
              name="phoneNumber"
              label="Phone Number"
              variant="standard"
              placeholder="+91-123-456-7890"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              error={error.phoneNumber ? true : false}
              helperText={error.phoneNumber}
              className='md:m-2'
            />
          </div>


          <div className='w-full items-start justify-items-start text-start md:ml-2'>
            <p className='text-sm font-bold pb-2 '>Select Subject ?</p>
            <div className='w-full flex  text-[13px] font-normal gap-1 flex-wrap justify-start'>

              <input type="radio" id="option1" name="subject" value="General inquiry" className='w-full max-w-[25px] '
                checked={subject === 'General inquiry'}
                onChange={(event) => setSubject(event.target.value)} /> General inquiry
              <input type="radio" id="option2" name="subject" value="General inquiry" className='w-full max-w-[25px] '
                checked={subject === 'General inquiry'}
                onChange={(event) => setSubject(event.target.value)} /> General inquiry
              <input type="radio" id="option3" name="subject" value="General inquiry" className='w-full max-w-[25px] '
                checked={subject === 'General inquiry'}
                onChange={(event) => setSubject(event.target.value)} /> General inquiry
              <input type="radio" id="option4" name="subject" value="General inquiry" className='w-full max-w-[25px] '
                checked={subject === 'General inquiry'}
                onChange={(event) => setSubject(event.target.value)} /> General inquiry

            </div>
          </div>
          <div className='w-full flex items-start justify-items-start md:pr-16 pl-2 pt-3 '>
            <TextField
              id="message"
              name="message"
              label="write Message"
              variant="standard"
              placeholder="Your message here..."
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              error={error.message ? true : false}
              helperText={error.message}
            />
          </div>
          <div className='w-full flex flex-col justify-items-end justify-end items-end pt-3 pr-16'>
            <button
              type="submit"
              className='px-4 py-2 flex text-white bg-teal-700 rounded hover:bg-teal-800'
            >
              Send Message
            </button>
            <Image src={LettersendImg} alt='letter-send-img' className='w-[350px] pr-10 pl-32 hidden md:block ' ></Image>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ContactInput;
