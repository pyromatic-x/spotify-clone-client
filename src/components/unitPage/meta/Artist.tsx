import { useEffect, useState } from 'react';
import { MetaBackdropContainer, MetaName } from './styled';
import { $mainWidth } from '../../main/effect';
import { useUnit } from 'effector-react';
import { getAccentFromImage } from '../../../utils/color';
import { ArtistPageDto } from '../../../api/dto/artist';
import { Grid, Typography } from '@mui/material';
import { toNumberWithDigits } from '../../../utils/number';
import { Verified as VerifiedIcon } from '@mui/icons-material/';

export const UnitMetaArtist = ({ name, backdrop, verified }: ArtistPageDto['meta']) => {
  const [nameFontSize, setNameFontSize] = useState(96);
  const [_accent, setAccent] = useState<string | undefined>(undefined);

  const containerWidth = useUnit($mainWidth);

  const nameLength = name?.length || 16;

  useEffect(() => {
    let size = 102;

    if (containerWidth <= 600) size = 40;
    else if (containerWidth <= 700) size = 50;
    else if (containerWidth <= 900) size = 60;
    else if (containerWidth <= 1300) size = 80;

    if (nameLength > 24) size -= nameLength / 1.5;

    if (nameFontSize !== size) setNameFontSize(size);
  }, [containerWidth]);

  useEffect(() => {
    if (backdrop) {
      const img = new Image();
      img.onload = () => {
        const accentColor = getAccentFromImage(img);
        if (accentColor && !_accent) setAccent(accentColor);
      };
      img.src = backdrop + '?w=200&h=200';

      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [backdrop]);

  return (
    <>
      <MetaBackdropContainer
        maxHeight="560px"
        height="100%"
        sx={{ backgroundImage: `url(${backdrop + '?h=1120&q=90'})` }}
        accent={_accent}
      />
      <Grid
        height="560px"
        position="relative"
        padding="40px 0"
        container
        flexDirection="column"
        justifyContent="flex-end"
      >
        {verified && (
          <Grid container alignItems="center" gap="8px">
            <VerifiedIcon sx={{ color: '#4CB3FF' }} />
            <Typography fontSize="0.9rem" fontWeight="bold" lineHeight={1}>
              Verified Artist
            </Typography>
          </Grid>
        )}
        <MetaName truncate={3} maxWidth="100%" fontSize={nameFontSize + 'px'}>
          {name}
        </MetaName>
        <Typography fontSize="0.9rem" fontWeight="bold">
          {toNumberWithDigits(12312312)} monthly listeners
        </Typography>
      </Grid>
    </>
  );
};

export default UnitMetaArtist;
