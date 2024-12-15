import { AlbumPageDto } from '../../api/dto/album';
import { ArtistPageDataDto } from '../../api/dto/artist';
import { PlaylistPageDto } from '../../api/dto/playlist';

export type TPageHeaderMetaProps = AlbumPageDto['meta'] | PlaylistPageDto['meta'] | ArtistPageDataDto['meta'];
