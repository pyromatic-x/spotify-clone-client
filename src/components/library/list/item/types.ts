import { LibraryItemDto } from '../../../../api/dto/library';

export type TItemProps = {
  onOpen: () => void;
} & LibraryItemDto;
