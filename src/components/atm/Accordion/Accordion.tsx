import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
};

export default function AccordionExpandIcon(props: Props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{props.title1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.text1}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{props.title2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.text2}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}