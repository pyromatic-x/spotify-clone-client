export type LibraryUpdateEventResponse = {
  status: 'added' | 'removed';
  target: string;
};
export type PlaylistUpdateEventResponse = {
  status: 'added' | 'removed';
  playlist: string;
  track: string;
};
