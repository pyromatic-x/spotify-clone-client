import { Grid, IconButton, Tooltip } from '@mui/material';
import { ArrowBackIosNew as BackIcon, ArrowForwardIos as ForwardIcon } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeaderNavigation = () => {
  const navigate = useNavigate();

  const history = window.history;

  const [ableToGoBack, setAbleToGoBack] = useState(false);
  const [ableToGoForward, setAbleToGoForward] = useState(false);

  useEffect(() => {
    const currentPosition = history.state?.idx ?? 0;
    const historyLength = history.length;

    setAbleToGoBack(currentPosition > 0);
    setAbleToGoForward(currentPosition < historyLength - 1);
  }, [history.length]);

  return (
    <Grid container wrap="nowrap" width="max-content">
      <Tooltip title="Go back">
        <span>
          <IconButton variant="scalable" disabled={!ableToGoBack} onClick={() => navigate(-1)}>
            <BackIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Go forward">
        <span>
          <IconButton variant="scalable" disabled={!ableToGoForward} onClick={() => navigate(1)}>
            <ForwardIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Grid>
  );
};

export default HeaderNavigation;
