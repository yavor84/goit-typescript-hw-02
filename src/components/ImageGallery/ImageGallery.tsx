import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ results, onClick }) => {
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
