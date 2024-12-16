import { UnitHeaderProps } from '../types';
import UnitHeaderCover from './Cover';

const UnitHeader = ({ type, meta }: UnitHeaderProps) => {
  return type !== 'artist' && <UnitHeaderCover type={type} meta={meta} />;
};

export default UnitHeader;
