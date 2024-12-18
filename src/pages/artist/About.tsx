import { Box, Typography } from '@mui/material';
import { ArtistPageDto } from '../../api/dto/artist';
import { toNumberWithDigits } from '../../utils/number';
import { AboutContainer, AboutWrapper } from './styled';

const ArtistPageAbout = ({ monthly, description, image }: ArtistPageDto['about']) => {
  return (
    <>
      <Typography fontSize="1.5rem" fontWeight="bold">
        About
      </Typography>
      <AboutContainer>
        <AboutWrapper sx={{ backgroundImage: `url(${image + '?w=900&h=570'})` }} />
        <Box position="relative" zIndex={1}>
          <Typography fontWeight="bold" mb={2} fontSize="1.1rem">
            {toNumberWithDigits(monthly)} monthly listeners
          </Typography>
          {description && (
            <Typography truncate={3} maxWidth="75%" fontWeight="bold">
              {description}
            </Typography>
          )}
        </Box>
      </AboutContainer>
    </>
  );
};

export default ArtistPageAbout;
