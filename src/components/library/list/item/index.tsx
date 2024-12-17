import { useUnit } from 'effector-react';
import { $filter, $UI } from '../../effect';
import { LibraryView } from '../../types';
import LibraryItemList from './list';
import { LibraryItemDto } from '../../../../api/dto/library';
import LibraryItemCompact from './compact';
import LibraryItemMinified from './minified';
import LibraryItemGrid from './grid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { $queue } from '../../../audiobar/effect';

const LibraryItem = (item: LibraryItemDto) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { view } = useUnit($filter);
  const { width } = useUnit($UI);

  const queue = useUnit($queue);

  const { playing } = useGlobalAudioPlayer();

  const active = location.pathname === `/${item._collection}/${item._id}`;

  const showPlayingIcon = queue ? playing && queue.target === item._id : false;

  const onOpen = () => {
    navigate(`/${item._collection}/${item._id}`);
  };

  let Component = null;
  if (view.type === LibraryView['List']) Component = LibraryItemList;
  if (view.type === LibraryView['Compact']) Component = LibraryItemCompact;
  if (view.type === LibraryView['Grid']) Component = LibraryItemGrid;
  if (width.name === 'min') Component = LibraryItemMinified;

  if (!Component) return <></>;

  return <Component {...item} onOpen={onOpen} active={active} showPlayingIcon={showPlayingIcon} />;
};

export default LibraryItem;
