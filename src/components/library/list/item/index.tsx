import { useUnit } from 'effector-react';
import { $filter, $UI } from '../../effect';
import { LibraryView } from '../../types';
import LibraryItemList from './list';
import { LibraryItemDto } from '../../../../api/dto/library';
import LibraryItemCompact from './compact';
import LibraryItemMinified from './minified';
import LibraryItemGrid from './grid';

const LibraryItem = (item: LibraryItemDto) => {
  const { view } = useUnit($filter);
  const { width } = useUnit($UI);

  if (width.name === 'min') return <LibraryItemMinified {...item} />;
  if (view.type === LibraryView['List']) return <LibraryItemList {...item} />;
  if (view.type === LibraryView['Compact']) return <LibraryItemCompact {...item} />;
  if (view.type === LibraryView['Grid']) return <LibraryItemGrid {...item} />;

  return <></>;
};

export default LibraryItem;
