import { UnitPageProps } from './types';
import UnitMetaBase from './Base';
import UnitMetaArtist from './Artist';
import { ArtistPageDto } from '../../../api/dto/artist';

const UnitMeta = ({ type, meta }: UnitPageProps) => {
  if (type !== 'artist') return <UnitMetaBase type={type} meta={meta} />;
  else return <UnitMetaArtist {...(meta as ArtistPageDto['meta'])} />;
};

export default UnitMeta;
