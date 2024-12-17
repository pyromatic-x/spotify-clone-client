import { Box, styled, Table } from '@mui/material';

export const StyledTracksTable = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-head': {
    padding: '2px 16px',
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    position: 'sticky',
    top: '0',

    '&:first-of-type': {
      width: '20px',
      padding: '2px 2px 2px 16px',
    },

    '& p': {
      fontSize: '0.85rem',
    },

    '&:not(&:first-of-type) p': {
      width: 'max-content',

      '&:hover': {
        color: theme.palette.common.white,
      },
    },

    '& svg': {
      fontSize: '1.3rem',
    },
  },

  '& .MuiTableBody-root': {
    position: 'relative',
    top: '14px',

    '& .MuiTableRow-root': {
      height: '58px',

      '& .simple-playbutton': {
        display: 'none',
        lineHeight: 0,
      },
      '& .tracks-table-index': {
        width: '20px',
      },

      '& .save-track-button': {
        opacity: 0,
      },
    },

    '& .MuiTableRow-root:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',

      '& .MuiTableCell-body:first-of-type': {
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
      },
      '& .MuiTableCell-body:last-of-type': {
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
      },

      '& .tracks-table-index': {
        display: 'none',
      },
      '& .simple-playbutton': {
        display: 'block',
      },

      '& a': {
        color: theme.palette.common.white,
      },

      '& .save-track-button': {
        opacity: 1,
      },
    },

    '& .MuiTableCell-body': {
      borderColor: 'transparent',
      padding: '5px 16px',

      '&:first-of-type': {
        width: '20px',
        padding: '2px 2px 2px 16px',
      },

      '&:last-of-type': {
        width: '90px',
      },

      '&:not(:nth-of-type(2))': {
        color: theme.palette.secondary.main,
        fontSize: '0.9rem',
      },

      '& a': {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export const StyledPlayingAnimation = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '12px',
  height: '14px',
  gap: '1px',
  transform: 'rotate(180deg)',

  '& div:nth-of-type(1)': { animationName: 'first' },
  '& div:nth-of-type(2)': { animationName: 'second' },
  '& div:nth-of-type(3)': { animationName: 'third' },
  '& div:nth-of-type(4)': { animationName: 'fourth' },

  '& div': {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    animationDuration: '0.65s',
    animationTimingFunction: 'ease-out',
    animationIterationCount: 'infinite',

    '@keyframes first': {
      '0%': { height: '5%' },
      '33%': { height: '50%' },
      '66%': { height: '100%' },
      '100%': { height: '5%' },
    },
    '@keyframes second': {
      '0%': { height: '50%' },
      '33%': { height: '100%' },
      '66%': { height: '5%' },
      '100%': { height: '50%' },
    },
    '@keyframes third': {
      '0%': { height: '100%' },
      '33%': { height: '5%' },
      '66%': { height: '50%' },
      '100%': { height: '100%' },
    },
    '@keyframes fourth': {
      '0%': { height: '5%' },
      '33%': { height: '37%' },
      '66%': { height: '83%' },
      '100%': { height: '5%' },
    },
  },
}));

export const ExplicitIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '18px',
  height: '18px',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: theme.palette.secondary.main,
  borderRadius: '2px',

  ':before': {
    content: "'E'",
    position: 'relative',
    top: '1px',
    fontSize: '0.6rem',
    color: theme.palette.common.black,
  },
}));
