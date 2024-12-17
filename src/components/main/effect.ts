import { createEvent, createStore } from 'effector';
import { CollectionEnums } from '../../api/dto';

type MainContainer = {
  width: number;
  scroll: number;
  accent?: string;
  sticky?: {
    _id: string;
    name: string;
    type: keyof typeof CollectionEnums;
    ref: React.RefObject<HTMLDivElement>;
  };
};

export const changeMainWidth = createEvent<number>();
export const changeMainScroll = createEvent<number>();
export const changeMainAccent = createEvent<string | undefined>();
export const changeMainSticky = createEvent<MainContainer['sticky']>();

export const dropMainAccent = createEvent();
export const dropMainSticky = createEvent();

export const $mainContainer = createStore<MainContainer>({
  width: 1980,
  scroll: 0,
  accent: undefined,
})
  .on(changeMainWidth, (state, payload) => ({ ...state, width: payload }))
  .on(changeMainScroll, (state, payload) => ({ ...state, scroll: payload }))
  .on(changeMainAccent, (state, payload) => ({ ...state, accent: payload }))
  .on(changeMainSticky, (state, payload) => ({ ...state, sticky: payload }))
  .on(dropMainAccent, (state) => ({ ...state, accent: undefined }))
  .on(dropMainSticky, (state) => ({ ...state, sticky: undefined }));
