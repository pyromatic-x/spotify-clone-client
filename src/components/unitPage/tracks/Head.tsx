import { TableCell, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import { Schedule as DurationIcon } from '@mui/icons-material/';
import { TracksTableProps } from './types';

const TracksTableHead = ({ type }: { type: TracksTableProps['source']['type'] }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">#</TableCell>
        <TableCell align="left">
          <Typography>Title</Typography>
        </TableCell>
        {type === 'playlist' ? (
          <>
            <TableCell align="left">
              <Typography>Album</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography>Date added</Typography>
            </TableCell>
          </>
        ) : (
          <TableCell align="left">
            <Typography>Plays</Typography>
          </TableCell>
        )}
        <TableCell align="left" />
        <TableCell align="left">
          <Tooltip title="Duration">
            <DurationIcon color="secondary" />
          </Tooltip>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TracksTableHead;
