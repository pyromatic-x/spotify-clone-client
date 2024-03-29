import { useState } from 'react';
import { ImageBase, Placeholder, Wrapper } from './styled';
import { checkIsColorTooBright, randomColor } from '../../../utils/strings';
import Curves from './curves';
import Lines from './lines';
import { ISectionItem } from '../../../api/types/section';

type IProps = Pick<ISectionItem, 'image' | 'name' | 'styles' | 'type'>;

const CardImage = ({ image, name, styles, type }: IProps) => {
  const [loaded, setLoaded] = useState(false);

  const color = styles?.color || randomColor();

  const isColorBright = checkIsColorTooBright(color);

  const radius = type === 'artist' ? '50%' : '4px';

  return (
    <Wrapper radius={radius}>
      <Placeholder color={color!} loaded={loaded} radius={radius} />
      <ImageBase radius={radius} src={image} alt={name} onLoad={() => setLoaded(true)} />
      {styles?.variant === 'curves' && (
        <Curves color={color!} size={80} title={name} loaded={loaded} isColorBright={isColorBright} />
      )}
      {styles?.variant === 'lines' && <Lines color={color!} title={name} loaded={loaded} />}
    </Wrapper>
  );
};

export default CardImage;
