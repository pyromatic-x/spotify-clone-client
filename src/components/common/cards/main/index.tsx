import { Box, CardContent } from '@mui/material';
import PlayButton from '../../../common/buttons/PlayButton';
import { StyledCard } from './styled';
import { ISectionItem } from '../../../home/constants';
import CardImage from '../../images';
import { TextTruncated } from '../../text/styled';

const Card = ({ image, color, title, subTitle }: ISectionItem) => {
  return (
    <StyledCard>
      <Box position="relative" mb={1}>
        <CardImage image={image} title={title} color={color} />
        <PlayButton
          sx={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            transition: '0.3s ease',
            zIndex: '1',
          }}
        />
      </Box>
      <CardContent sx={{ padding: '0', '&:last-child': { padding: '0' } }}>
        <TextTruncated fontWeight="bold" lines={1}>
          {title}
        </TextTruncated>
        {subTitle && (
          <TextTruncated color="secondary" fontSize="small">
            {subTitle}
          </TextTruncated>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default Card;
