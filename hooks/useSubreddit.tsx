import useSWR from 'swr';

const fetcher = async (url) => await fetch(url).then((res) => res.json());

const useSubreddit = (url: string) => {
  const { data, error } = useSWR(`https://www.reddit.com/${url}`, fetcher);
  // if (!data) error.error = '404';
  if (!data && !error) {
    return {
      data: undefined,
      error: undefined,
    };
  }
  return {
    data: data,
    error: error,
  };
};

export default useSubreddit;
