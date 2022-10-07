import styles from './dataBox.module.scss';

const DataBox = ({ icon, data, info }) => {
  const Icon = icon;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>{info}</p>
        <h3>{data}</h3>
      </div>
      <div className={styles.icon}>
        <Icon height={30} width={30} />
      </div>
    </div>
  );
};

export default DataBox;
