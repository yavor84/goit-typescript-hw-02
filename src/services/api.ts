import axios from 'axios';
import { FetchImagesResponse, Params } from '../components/types/types';

// https://api.unsplash.com/search/photos

const accessKey: string = 'OMHqPfSsvPNPpF5_L4BVhitUphddVY35hTIYkf_SV-o';

const fetchImages = async (query: string, currentPage: number): Promise<FetchImagesResponse> => {
  const params: Params = {
    query: query,
    per_page: 12,
    orientation: 'landscape',
    page: currentPage,
    client_id: accessKey,
  };
  const response = await axios.get<FetchImagesResponse>(`https://api.unsplash.com/search/photos`, {
    params,
  });
  return response.data;
};

export default fetchImages;
