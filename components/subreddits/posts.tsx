import useSubreddit from '../../hooks/useSubreddit';
import styles from './posts.module.scss';

const Posts = ({ subreddit }) => {
  const { data, error } = useSubreddit(`r/${subreddit}.json`);

  // console.log(data, "indie pots");
  if (!data && !error) {
    return <div>Loading</div>;
  }

  return (
    <section className={styles.container}>
      {error
        ? 'Error Loading Posts'
        : data.data.children.map(({ data }) => {
            return (
              <article className={styles.post} key={data.title}>
                <h2>{data.title}</h2>
                <div className={styles.info}>
                  <p>{data.author}</p>
                  <p>{data.created}</p>
                  <p>{data.score}</p>
                </div>
                <p className={styles.bodyText}>{data.body}</p>
                <div className={styles.stats}>
                  <p>Ups {data.ups}</p>
                  <p>Downs {data.downs}</p>
                  <p>Comments {data.num_comments}</p>
                </div>
              </article>
            );
          })}
    </section>
  );
};

export default Posts;
