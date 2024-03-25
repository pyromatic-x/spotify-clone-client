import { ClickAwayListener, List as MUIList } from '@mui/material';
import { useState } from 'react';
import ListItem from './Track';
import { onDragQueue } from '../../audiobar/effect';

type IProps = {
  tracks: Array<any>;
  draggable?: boolean;
};

const getParentElement = (target: HTMLElement) => {
  return target.tagName === 'LI' ? target : target.offsetParent;
};

const List = ({ tracks, draggable }: IProps) => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const [dragOverPosition, setDragOverPosition] = useState<'top' | 'bottom'>('bottom');

  if (!tracks.length) return null;

  const getItemIds = (start: number, end: number) => tracks.slice(start, end + 1).map((t) => t.id);

  const handleOnSelect = (shiftKey: boolean, selectedIndex: number) => {
    if (!selected.length && shiftKey) {
      setSelected(getItemIds(0, selectedIndex));
      return;
    }

    if (!shiftKey) {
      setSelected([tracks[selectedIndex].id]);
      return;
    }

    if (selected.length && shiftKey) {
      const firstSelectedIndex = tracks.findIndex((t: any) => t.id === selected[0]);
      const lastSelectedIndex = tracks.findIndex((t: any) => t.id === selected[selected.length - 1]);
      const direction = selectedIndex > lastSelectedIndex ? 'down' : 'up';

      if (selectedIndex >= firstSelectedIndex && selectedIndex <= lastSelectedIndex) return;

      if (direction === 'down') {
        setSelected(getItemIds(firstSelectedIndex, selectedIndex));
        return;
      }

      if (direction === 'up') {
        setSelected(getItemIds(selectedIndex, lastSelectedIndex));
        return;
      }

      if (selected.length === 1) {
        setSelected(getItemIds(firstSelectedIndex, selectedIndex));
        return;
      }
    }
  };

  const handleOnDragStart = (event: React.DragEvent<HTMLLIElement>, id: string) => {
    event.dataTransfer.setData('id', id);
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';

    const element = getParentElement(event.target as HTMLElement);
    element?.classList.add('on-dragged');

    if (!selected.includes(id)) setSelected([id]);
  };

  const handleOnDragOver = (event: React.DragEvent<HTMLUListElement>) => {
    event.preventDefault();

    const parent = getParentElement(event.target as HTMLElement);

    const height = parent?.getBoundingClientRect().height ?? 0;
    const y = event.clientY - (parent?.getBoundingClientRect().top ?? 0);
    const effectPosition = height / y < 2 ? 'bottom' : 'top';

    handleDropEffect(parent, false, effectPosition);
    setDragOverPosition(effectPosition);
  };

  const handleOnDrop = (event: React.DragEvent<HTMLUListElement>) => {
    handleDropEffect(null, true);

    const dragged = event.dataTransfer.getData('id');
    const target = getParentElement(event.target as HTMLElement)?.getAttribute('id');

    onDragQueue({ dragged, target: target as string, selected, position: dragOverPosition });
  };

  const handleDropEffect = (
    target?: HTMLElement | Element | null,
    isEnd?: boolean,
    effectPosition?: 'top' | 'bottom',
  ) => {
    const siblings = document.querySelectorAll('[aria-label="queue-list-track"]');
    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove(`on-drag-over-top`);
      siblings[i].classList.remove(`on-drag-over-bottom`);
      if (isEnd) siblings[i].classList.remove('on-dragged');
    }

    if (target) target?.classList.add(`on-drag-over-${effectPosition}`);
  };

  let listDragProps = {};

  if (draggable) {
    listDragProps = {
      onDragOver: handleOnDragOver,
      onDrop: handleOnDrop,
    };
  }

  return (
    <ClickAwayListener onClickAway={() => setSelected([])}>
      <MUIList disablePadding sx={{ paddingBottom: '8px' }} {...listDragProps}>
        {tracks.map((track, index: number) => (
          <ListItem
            key={track.id}
            track={track}
            index={index}
            selected={selected.includes(track.id)}
            firstSelected={selected[0] === track.id}
            lastSelected={selected[selected.length - 1] === track.id}
            draggable={draggable}
            handleDropEffect={handleDropEffect}
            handleOnDragStart={handleOnDragStart}
            handleOnSelect={handleOnSelect}
          />
        ))}
      </MUIList>
    </ClickAwayListener>
  );
};

export default List;
