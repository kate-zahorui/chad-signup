import { Outlet } from 'react-router-dom';
import Paper, { PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { ContentContainer, StepsSidebar } from '../';

import backgroundImage from '../../images/background.png';
import s from './SharedPublicLayout.module.css';

const StyledPaper = styled(Paper)<PaperProps>(() => ({
  maxWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#fff',
  '@media screen and (min-width: 834px)': {
    // background
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    backgroundPosition: '50% 50%',
  },
  '@media screen and (min-width: 1440px)': {},
}));

const SharedPublicLayout = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledPaper elevation={0}>
      <ContentContainer>
        {width >= 1440 && <StepsSidebar />}

        <main className={s.main}>
          <Outlet />
        </main>
      </ContentContainer>
    </StyledPaper>
  );
};

export default SharedPublicLayout;
