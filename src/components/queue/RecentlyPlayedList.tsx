import { useUnit } from 'effector-react';
import { $recentlyPlayed } from '../audiobar/effect';
import List from './list';

const RecentlyPlayedList = () => {
  const items = useUnit($recentlyPlayed);
  return <List tracks={items} />;
};

export default RecentlyPlayedList;
