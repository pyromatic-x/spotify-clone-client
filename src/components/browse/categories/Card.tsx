import { CardContent, CardMedia, Typography } from '@mui/material';
import { StyledSearchCard } from './styled';
import { IBrowseCategory } from '../../../api/types/browse';

const CategoryCard = ({ title, image, color }: IBrowseCategory) => (
  <StyledSearchCard color={color}>
    <CardMedia component="img" src={image} alt={title} width={100} height={100} />

    <CardContent>
      <Typography fontWeight="bold" variant="h6">
        {title}
      </Typography>
    </CardContent>
  </StyledSearchCard>
);

export default CategoryCard;
