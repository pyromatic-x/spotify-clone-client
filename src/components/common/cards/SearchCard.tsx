import { CardContent, CardMedia, Typography } from '@mui/material';
import { StyledSearchCard } from './styled';

type IProps = {
  title: string;
  image: any;
  color: string;
};

const SearchCard = ({ title, image, color }: IProps) => (
  <StyledSearchCard color={color}>
    <CardMedia component="img" src={image} alt={title} width={100} height={100} />
    <CardContent>
      <Typography fontWeight="bold" variant="h6">
        {title}
      </Typography>
    </CardContent>
  </StyledSearchCard>
);

export default SearchCard;
