import React,{ useState, useEffect } from "react";
import './App.css';
import { experimentalStyled,styled,createMuiTheme } from "@mui/material/styles";
import {withStyles,makeStyles,ThemeProvider} from "@mui/styles";
import { Stepper, Step, StepLabel,StepContent,StepConnector, Button, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Root = styled("div")(({ theme }) => ({
  width: "100%"
}));





const StepLabelWrapper = styled('div')(({ theme }) => ({
  fontFamily: 'Neurial Grotesk',
  fontStyle: 'normal',
  maxWidth:'212px',
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '38px',
  color: '#FFFFFF'
}));
const StepContentWrapper = styled('div')(({ theme }) => ({
  fontFamily: 'Neurial Grotesk',
  marginLeft: 57,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '30px',
  color: '#B8B8B8'
}));
const StepConnectorWrapper = styled(StepConnector)(({ completed }) => ({

  '& .MuiStepConnector-line': {
        marginLeft: 25,
        border: 3,
        width: 0,
        height: 0,
        borderLeftStyle:"none",
        borderColor: completed ? '#D9D9D9':'#8DA737' ,
        Width: 500,
        borderStyle: "dashed",
        borderRadius: 0,

  },

}));
const StepIconWrapper = styled('div')(({ completed }) =>({
  position: 'relative',
  width: 75.83,
  height: 74.4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: completed ?'#E2FF6F':'#D9D9D9',
  borderRadius: 5,
  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  zIndex: 1,

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '27.65px',
    height: '26.99px',
    top: -32,
    left: 52,

    borderRadius: 4,
    backgroundColor: completed ?'#E2FF6F':'#D9D9D9',
    transform: 'translate(50%, 50%) rotate(90deg)',
    zIndex: -1,
  },
}));

const CustomStepIcon = (props) => {
  const { active, completed } = props;
  const textcolor= completed ?'#E2FF6F':'#D9D9D9';
  return (

    <StepIconWrapper active={active} completed={completed}>
      <CheckIcon style={{ color: textcolor }} />
    </StepIconWrapper>
  );
};

function getSteps() {
  return [{title:"Create Account",content:"Lorem ipsum dolor sit amet consecte"},{title: "Quick Deposit",content:"Lorem ipsum dolor sit amet consecte"}, {title:"Start Trading",content:"Lorem ipsum dolor sit amet consecte"},{title:"Take Profit",content:"Lorem ipsum dolor sit amet consecte"}];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Create Account";
    case 1:
      return "Quick Deposit";
    case 2:
      return "Start Trading";
    case 3:
        return "Take Profit";
    default:
      return "Unknown stepIndex";
  }
}



export default function VerticalStepper() {

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const isLastStep = activeStep === steps.length;
  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleReset = () => {
   setActiveStep(0);
 };
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep === steps.length - 1) {
        handleReset();
      } else {
        handleNext();
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [activeStep, steps.length]);


  return (
    <Root>

    <Stepper activeStep={activeStep} orientation="vertical"
        connector={<StepConnectorWrapper  completed />} >
      {steps.map((label, index) => (
        <Step key={label.title} >
          <StepLabel StepIconComponent={CustomStepIcon}><StepLabelWrapper>{label.title}</StepLabelWrapper></StepLabel>
          <StepContent><StepContentWrapper>{label.content}</StepContentWrapper></StepContent>
        </Step>
      ))}
    </Stepper>


<div className="btn">
              <Button
              sx={{
          color: '#000000',
          display: 'flex',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: 18,
          mt:6,
          padding: '24px 36px',
          maxWidth:431,
          '&:hover': {
          background: '#E2FF6F',
          },
          height: 66,
          background: '#E2FF6F'  }}
                href="https://app.density.exchange/">
                Sign Up Now
              </Button>

  </div>


    </Root>
  );
}
