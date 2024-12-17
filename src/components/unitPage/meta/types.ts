import { CollectionEnums } from '../../../api/dto';
import { AlbumPageDto } from '../../../api/dto/album';
import { ArtistPageDto } from '../../../api/dto/artist';
import { PlaylistPageDto } from '../../../api/dto/playlist';
import { UserPageDto } from '../../../api/dto/user';

export type UnitPageProps = {
  type: keyof typeof CollectionEnums;
  meta: { accent?: string; cover?: string; avatar?: string; name?: string; username?: string } & (
    | AlbumPageDto['meta']
    | PlaylistPageDto['meta']
    | UserPageDto['meta']
    | ArtistPageDto['meta']
  );
};
