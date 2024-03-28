import { useState } from 'react';
import { ImageBase, Placeholder, Wrapper } from './styled';
import { ISectionItem } from '../../home/constants';
import { checkIsColorTooBright } from '../../../utils/strings';
import Curves from './curves';
import Lines from './lines';

const CardImage = ({ color, image, title }: Omit<ISectionItem, 'id'>) => {
  const [loaded, setLoaded] = useState(false);

  const isColorBright = checkIsColorTooBright(color!);

  const radius = image?.type === 'circle' ? '50%' : '4px';

  return (
    <Wrapper radius={radius}>
      <Placeholder color={color!} loaded={loaded} radius={radius} />
      <ImageBase radius={radius} src={image?.src} alt={title} onLoad={() => setLoaded(true)} />
      {image?.style === 'curves' && (
        <Curves color={color!} size={80} title={title} loaded={loaded} isColorBright={isColorBright} />
      )}
      {image?.style === 'lines' && <Lines color={color!} title={title} loaded={loaded} />}
    </Wrapper>
  );
};

export default CardImage;
