import { Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import Logo from './assets/icons/Logo';
import Modal from './components/common/modal';
import { Circle } from './components/common/modal/styled';
import { PropsWithChildren } from 'react';

function NoMobileModal({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return !isMobile ? (
    <>{children}</>
  ) : (
    <Modal isOpen={true}>
      <>
        <Typography component="h1" fontSize="2.1rem" fontWeight="bold" mb="15px">
          Spotify Clone
        </Typography>
        <Typography mb="30px">
          A demo of our lovely Spotify made by{' '}
          <Link href="https://pyromatic.me/" target="_blank" color="common.black" fontWeight="bold">
            @pyromatic
          </Link>
        </Typography>
        <Typography mb="40px">
          Unfortunately this demo application has no mobile version. Please, open the application via laptop{' '}
          {!isMobile ? "or stop playing with browser's width" : ''} 😊
        </Typography>
        <Logo size="2.5em" sx={{ display: 'block', marginBottom: '40px' }} />
        <Circle bottom="-5vw" right="-9vw" size="24vw" />
        <Circle bottom="20vw" left="10vw" size="24vw" />
        <Circle bottom="16vw" right="3vw" size="28vw" filled />
        <Circle bottom="-10vw" left="-15vw" size="43vw" filled />
      </>
    </Modal>
  );
}

export default NoMobileModal;
