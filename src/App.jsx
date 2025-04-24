import './App.css';
import ErrorMassage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import fetchImages from './services/api';
import toast from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = query => {
    setQuery(`${query}/${Date.now()}`);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query.split('/')[0], page);
        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
        toast.error('Error! Please try refreshing the page');
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMassage />}
      {images.length > 0 && <ImageGallery results={images} onClick={openModal} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && page < totalPages && totalPages > 1 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
    </>
  );
}

export default App;
