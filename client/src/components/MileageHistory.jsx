import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'history1'} onChange={handleChange('history1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>9/7/2020</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mileage: 33000
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'history2'} onChange={handleChange('history2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>9/6/2020</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mileage: 32000
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'history3'} onChange={handleChange('history3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>9/5/2020</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mileage: 31000
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
