import {Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import {styled} from '@mui/material/styles';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


const AccordionItem = ({ question, answer, index, expandedIndex, handleClick }) => {
    const isExpanded = expandedIndex === index;

    const CustomAccordion = styled(Accordion)(()=>{
      return {
        boxShadow:'none',
        border:'none',
        backgroundColor:'rgba(244, 237, 241, 1)', 
      }  
    })
  
    return (
      <CustomAccordion className="w-full flex-col">
        <AccordionSummary
          expandIcon={isExpanded ? <AiOutlineMinus className="w-auto" /> : <AiOutlinePlus className="w-auto" />}
          aria-controls={`panel-${index}-content`}
          id={`panel-${index}-header`}
        >
          <p className="w-full font-normal text-left ">{question}</p>
        </AccordionSummary>
        <AccordionDetails>
          {isExpanded && <p className="w-full font-light text-left text-gray-500">{answer}</p>}
        </AccordionDetails>
      </CustomAccordion>
    );
  };

export default AccordionItem;