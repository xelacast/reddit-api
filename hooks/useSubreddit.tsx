import useSWR from 'swr';

const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};

const useSubreddit = (url: string) => {
  const { data, error } = useSWR(`https://www.reddit.com/${url}`, fetcher);

  return {
    data: data,
    error: error,
  };
};

export default useSubreddit;
