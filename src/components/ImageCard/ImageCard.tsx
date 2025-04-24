import css from './ImageCard.module.css';

const ImageCard = ({ result: { description, urls } }) => {
  return (
    <div>
      <img className={css.image} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
