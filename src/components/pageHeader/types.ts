import { AlbumPageDto } from '../../api/dto/album';
import { PlaylistPageDto } from '../../api/dto/playlist';

export type TPageHeaderMetaProps = AlbumPageDto['meta'] | PlaylistPageDto['meta'];
