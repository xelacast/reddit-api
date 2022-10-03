import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useSubreddit = (subreddit: string, section = 'about') => {
  const { data, error } = useSWR(
    `https://www.reddit.com/r/${subreddit}/${section}/.json`,
    fetcher
  );

  return {
    subreddit: data,
    isLoading: !data && !error,
    error: error,
  };
};

export default useSubreddit;

// const useSubredditAbout = (subreddit: string) => {
//   const {data, error} = useSWR('https://www.reddit.com/r/${}/');
// }
