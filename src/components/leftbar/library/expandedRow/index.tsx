import { Typography } from '@mui/material';
import { Container } from './styled';

const ExpandedRow = () => (
  <Container>
    <Typography>Title</Typography>
    <Typography textAlign="center">Date added</Typography>
    <Typography textAlign="end">Played</Typography>
  </Container>
);

export default ExpandedRow;
