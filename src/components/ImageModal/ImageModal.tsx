import Modal, { Styles } from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../types/types';

Modal.setAppElement('#root');

const customStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    position: 'relative',
  },
};

type ImageModalProps = {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
};

const ImageModal = ({ isOpen, image, onClose }: ImageModalProps) => {
  if (!image) {
    return;
  }
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <img src={image.urls.regular} alt={image.description || 'Image'} />
        <p className={css.text}>{image.description}</p>
        <p className={css.text}>
          <span className={css.span}>Image by:</span> {image.user.name}
        </p>
        <p className={css.text}>
          <span className={css.span}>Likes:</span> &#128077;{image.likes}
        </p>
      </Modal>
    </>
  );
};

export default ImageModal;
