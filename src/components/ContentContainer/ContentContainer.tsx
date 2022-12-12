import React from 'react';
import Container, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface IProps {
  children: any;
}

const StyledContainer = styled(Container)<ContainerProps>(() => ({
  maxWidth: '390px',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  '@media screen and (min-width: 834px)': {
    maxWidth: '834px',
  },
  '@media screen and (min-width: 1440px)': {
    maxWidth: '1440vw',
    padding: '0',
  },
}));

const ContentContainer: React.FunctionComponent<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContentContainer;
