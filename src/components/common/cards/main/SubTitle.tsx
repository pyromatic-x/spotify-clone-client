import { ISectionItem } from '../../../../api/types/section';
import Link from '../../text/Link';
import { TextTruncated } from '../../text/styled';
import { getDateValues } from '../../../../utils/date';

const SubTitle = ({ type, releasedAt, by, headliners }: ISectionItem) => {
  if (type === 'artist') return Artist();
  if (type === 'playlist') return Playlist({ headliners, by });
  if (type === 'album') return Album({ releasedAt, by });
};

const Artist = () => (
  <TextTruncated color="secondary" fontSize="small">
    Artist
  </TextTruncated>
);
const Album = ({ releasedAt, by }: Pick<ISectionItem, 'releasedAt' | 'by'>) => {
  const { year } = getDateValues(releasedAt!);

  return (
    <TextTruncated color="secondary" fontSize="small">
      {year} ● <Link to="">{by!.name}</Link>
    </TextTruncated>
  );
};

const Playlist = ({ headliners, by }: Pick<ISectionItem, 'headliners' | 'by'>) => {
  if (!headliners && !by) return null;

  return (
    <TextTruncated color="secondary" fontSize="small">
      {headliners && (
        <>
          {headliners.map((t, index) => (
            <span key={t.id}>
              <Link to="">{t.name}</Link>
              {index !== headliners.length - 1 && ', '}
            </span>
          ))}
          {' and more'}
        </>
      )}
      {by && 'by ' + by.name}
    </TextTruncated>
  );
};

export default SubTitle;
