import { Box, CardContent } from '@mui/material';
import PlayButton from '../../../common/buttons/PlayButton';
import { StyledCard } from './styled';
import CardImage from '../../images';
import { TextTruncated } from '../../text/styled';
import { ISectionItem } from '../../../../api/types/section';
import SubTitle from './SubTitle';

const Card = (props: ISectionItem) => {
  const { name, image, type, styles } = props;

  return (
    <StyledCard>
      <Box position="relative" mb={1}>
        <CardImage image={image} name={name} styles={styles} type={type} />
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
          {name}
        </TextTruncated>
        <SubTitle {...props} />
      </CardContent>
    </StyledCard>
  );
};

export default Card;
