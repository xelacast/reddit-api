import styles from './post.module.scss';

const Post = ({ post }) => {

  // const fetcher = (url) => fetch(url).then((res) => res.json());

  // const { data, error } = useSWR(
  //   `https://www.reddit.com/r/${subreddit}.json`,
  //   fetcher
  // );

  return (
    <article className={styles.container}>
      <h2>{post.title}</h2>
      <div className={styles.info}>
        <p>{post.author}</p>
        <p>{post.created}</p>
        <p>{post.score}</p>
      </div>
      <p className={styles.bodyText}>{post.body}</p>
      <div className={styles.stats}>
        <p>Ups {post.ups}</p>
        <p>Downs {post.downs}</p>
        <p>Comments {post.num_comments}</p>
      </div>
    </article>
  );
};

export default Post;
