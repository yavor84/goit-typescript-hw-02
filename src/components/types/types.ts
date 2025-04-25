export type Image = {
  id: string;
  description: string | null;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: { name: string };
};

export type FetchImagesResponse = {
  results: Image[];
  total_pages: number;
  total: number;
};

export type Params = {
  query: string;
  per_page: number;
  orientation: string;
  page: number;
  client_id: string;
};
