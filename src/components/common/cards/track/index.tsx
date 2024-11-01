import { Box, Grid, Typography } from '@mui/material';
import { ITrack } from '../../../../api/types/track';
import { Container } from './styled';
import { ImageBase } from '../../images/styled';
import Link from '../../text/Link';
import { TextTruncated } from '../../text/styled';
import ButtonWithTooltip from '../../buttons/ButtonWithTooltip';
import { ControlPoint, MoreHoriz } from '@mui/icons-material';

type IProps = Partial<ITrack> & {
  index?: number;
  image?: string;
};

const Track = ({ album, image, name, authors, liked }: IProps) => {
  return (
    <Container>
      <Grid container alignItems="center" gap={1}>
        <ImageBase src={album?.image || image} radius="4px" width="40px" height="40px" />
        <Box>
          <Typography>{name}</Typography>
          <TextTruncated color="secondary" fontSize="small">
            {authors && (
              <>
                {authors.map((t, index) => (
                  <span key={t.id}>
                    <Link to="">{t.name}</Link>
                    {index !== authors.length - 1 && ', '}
                  </span>
                ))}
              </>
            )}
          </TextTruncated>
        </Box>
      </Grid>
      <Grid container alignItems="center" width="max-content" flexWrap="nowrap" gap={1}>
        <ButtonWithTooltip
          className="track-liked-button"
          Icon={ControlPoint}
          title={liked ? 'Add to playlist' : 'Add to Liked Songs'}
          disableRipple
          disableTransform
          placement="top"
        ></ButtonWithTooltip>
        <Typography color="secondary" fontSize="0.9rem">
          3:21
        </Typography>
        <ButtonWithTooltip
          className="track-more-button"
          Icon={MoreHoriz}
          title={'More options for ' + name}
          disableRipple
          disableTransform
          placement="top"
        ></ButtonWithTooltip>
      </Grid>
    </Container>
  );
};

export default Track;
