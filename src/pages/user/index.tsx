import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $user, $userError, getUserPageData, resetUserPageData } from './effect';
import { useUnit } from 'effector-react';
import Error from '../Error';

import UnitPage from '../../components/unitPage';

const UserPage = () => {
  const { id } = useParams();

  const user = useUnit($user);
  const error = useUnit($userError);

  useEffect(() => {
    if (id) getUserPageData(id);

    return resetUserPageData;
  }, [id]);

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  if (error) return <Error />;

  return (
    user && (
      <UnitPage meta={user.meta} type="user">
        PLAYLIST CHILDRENS!!!!
      </UnitPage>
    )
  );
};

export default UserPage;
