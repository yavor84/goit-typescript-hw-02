import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../types/types';

type ImageGalleryProps = {
  results: Image[];
  onClick: (result: Image) => void;
};

const ImageGallery = ({ results, onClick }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {results.map(result => {
        return (
          <li className={css.item} key={result.id} onClick={() => onClick(result)}>
            <ImageCard result={result} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
