import { Image } from '../types/types';
import css from './ImageCard.module.css';

type ImageCardProps = {
  result: Image;
};

const ImageCard = ({ result: { description, urls } }: ImageCardProps) => {
  return (
    <div>
      <img className={css.image} src={urls.small} alt={description || 'Image'} />
    </div>
  );
};

export default ImageCard;
