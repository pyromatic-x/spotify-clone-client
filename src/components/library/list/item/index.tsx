import { useUnit } from 'effector-react';
import { $filter, $UI } from '../../effect';
import { LibraryView } from '../../types';
import LibraryItemList from './list';
import { LibraryItemDto } from '../../../../api/dto/library';
import LibraryItemCompact from './compact';
import LibraryItemMinified from './minified';
import LibraryItemGrid from './grid';
import { useNavigate } from 'react-router-dom';

const LibraryItem = (item: LibraryItemDto) => {
  const navigate = useNavigate();

  const { view } = useUnit($filter);
  const { width } = useUnit($UI);

  const onOpen = () => {
    navigate(`/${item._collection}/${item._id}`);
  };

  if (width.name === 'min') return <LibraryItemMinified {...item} onOpen={onOpen} />;
  if (view.type === LibraryView['List']) return <LibraryItemList {...item} onOpen={onOpen} />;
  if (view.type === LibraryView['Compact']) return <LibraryItemCompact {...item} onOpen={onOpen} />;
  if (view.type === LibraryView['Grid']) return <LibraryItemGrid {...item} onOpen={onOpen} />;

  return <></>;
};

export default LibraryItem;
