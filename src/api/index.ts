import axios from 'axios';

export const $api = axios.create({
  baseURL: 'https://api.anilibria.tv/v3/',
});

export const getSearch = async (
  searchParam: string,
  total: number | undefined
) => {
  const search = (
    await $api.get(`/title/search?search=${searchParam}`, {
      params: {
        playlist_type: 'array',
        items_per_page: total,
      },
    })
  ).data;
  return search;
};
