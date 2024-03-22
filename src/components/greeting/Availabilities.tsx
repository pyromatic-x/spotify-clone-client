import { Audiotrack, HorizontalSplit, Keyboard, QueueMusic, Search, VolumeDown } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

const availabilities = [
  {
    text: 'Audio Player',
    icon: <Audiotrack />,
  },
  {
    text: 'Filter and Search in Your Library',
    icon: <HorizontalSplit />,
  },
  {
    text: 'Tracks Queue',
    icon: <QueueMusic />,
  },
  {
    text: 'Change Volume',
    icon: <VolumeDown />,
  },
  {
    text: 'Search Page',
    icon: <Search />,
  },
  {
    text: 'Shortcuts',
    icon: <Keyboard />,
  },
];

export default function Availabilities() {
  return (
    <Grid item lg={6}>
      <Typography fontWeight="bold">What is available:</Typography>
      <List>
        {availabilities.map((a) => (
          <ListItem key={a.text} sx={{ padding: '0' }}>
            <ListItemText
              sx={{
                '& span': {
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  transform: a.text === 'Filter and Search in Your Library' ? 'rotate(270deg)' : 'none',
                }}
              >
                {a.icon}
              </Box>
              {a.text}{' '}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
