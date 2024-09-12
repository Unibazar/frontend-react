'use client';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const AccordionItem = ({ FAQ }) => {
  const [expanded, setExpanded] = useState(false);
  let midpoint = 0;

  const splitArrayInTwo = arr => {
    midpoint = Math.ceil(arr.length / 2);
    return [arr.slice(0, midpoint), arr.slice(midpoint)];
  };
  const [LeftPart, RightPart] = splitArrayInTwo(FAQ);

  const handleChange = panel => (event, isExpanded) => {
    console.log(isExpanded);

    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="flex w-full justify-center gap-7 flex-wrap">
        <div className="left w-full md:flex-1 space-y-4">
          {LeftPart.map((item, index) => (
            <Accordion key={index} className="shadow-none bg-[#FAF9F9] before:hidden" expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary expandIcon={expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="right w-full md:flex-1 space-y-4">
          {RightPart.map((item, index) => (
            <Accordion key={index} className="shadow-none bg-[#FAF9F9] before:hidden" expanded={expanded === `panel${index + midpoint}`} onChange={handleChange(`panel${index + midpoint}`)}>
              <AccordionSummary expandIcon={expanded === `panel${index + midpoint}` ? <RemoveIcon /> : <AddIcon />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
