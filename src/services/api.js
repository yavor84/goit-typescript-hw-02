import axios from 'axios';

// https://api.unsplash.com/search/photos

const accessKey = 'OMHqPfSsvPNPpF5_L4BVhitUphddVY35hTIYkf_SV-o';

const fetchImages = async (query, currentPage) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      per_page: 12,
      orientation: 'landscape',
      page: currentPage,
      client_id: accessKey,
    },
  });
  return response.data;
};

export default fetchImages;
