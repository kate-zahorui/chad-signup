import React from 'react';
import Paper, { PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface IProps {
  children: any;
}

const StyledPaper = styled(Paper)<PaperProps>(() => ({
  width: '100%',
  margin: '0 auto',
  padding: '0',
  backgroundColor: '#fff',
  '@media screen and (min-width: 834px)': {
    width: '540px',
    padding: '80px 72px 64px',
    borderRadius: '8px',
    boxShadow: ' 0px 5px 20px rgba(108, 117, 139, 0.2)',
  },
  '@media screen and (min-width: 1440px)': {
    width: '480px',
    padding: '64px 40px',
  },
}));

const ContentPaper: React.FunctionComponent<IProps> = ({ children }) => {
  return <StyledPaper elevation={0}>{children}</StyledPaper>;
};

export default ContentPaper;
