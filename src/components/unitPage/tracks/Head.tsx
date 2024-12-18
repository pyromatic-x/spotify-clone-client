import { TableCell, TableRow, Tooltip, Typography } from '@mui/material';
import { Schedule as DurationIcon } from '@mui/icons-material/';
import { TracksTableProps } from './types';
import { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { $mainContainer } from '../../main/effect';
import { StyledTracksTableHead } from './styled';

const TracksTableHead = ({ type }: { type: TracksTableProps['source']['type'] }) => {
  const { width, scroll } = useUnit($mainContainer);

  const ref = useRef<HTMLTableSectionElement>(null);

  const [position, setPosition] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (ref.current && width) {
      const position = ref.current.getBoundingClientRect().top - 60;
      if (position > 0) setPosition(position);
    }
  }, [ref, width]);

  useEffect(() => {
    setSticky(scroll >= position);
  }, [position, scroll]);

  return (
    <StyledTracksTableHead ref={ref} sticky={sticky}>
      <TableRow>
        <TableCell align="center">#</TableCell>
        <TableCell align="left">
          <Typography>Title</Typography>
        </TableCell>
        {type === 'playlist' ? (
          <>
            {width > 720 && (
              <TableCell align="left">
                <Typography>Album</Typography>
              </TableCell>
            )}
            {width > 950 && (
              <TableCell align="left">
                <Typography>Date added</Typography>
              </TableCell>
            )}
          </>
        ) : (
          width > 720 && (
            <TableCell align="left">
              <Typography>Plays</Typography>
            </TableCell>
          )
        )}
        <TableCell align="left" />
        <TableCell align="left">
          <Tooltip title="Duration">
            <DurationIcon color="secondary" sx={{ position: 'relative', top: '3px' }} />
          </Tooltip>
        </TableCell>
      </TableRow>
    </StyledTracksTableHead>
  );
};

export default TracksTableHead;
