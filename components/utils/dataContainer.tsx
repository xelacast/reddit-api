import styles from './dataContainer.module.scss';
import useSubreddit from '../../hooks/useSubreddit';
import Heart from '../../assets/heart-outline.svg';
import Friend from '../../assets/people-outline.svg';
import Chart from '../../assets/stats-chart-outline.svg';
import Page from '../../assets/newspaper-outline.svg';
import Face from '../../assets/person-circle-outline.svg';
import Time from '../../assets/timer-outline.svg';
import DataBox from './dataBox';

const DataContainer = ({ subreddit }) => {
  const { data, error } = useSubreddit(`r/${subreddit}/about.json`);

  if (error) {
    return (
      <div className={styles.dataContainer}>
        <DataBox icon={Heart} data={'Not A Sub'} info={''} />
        <DataBox icon={Friend} data={'Not A Sub'} info={'Subs'} />
        <DataBox icon={Chart} data={'Not A Sub'} info={'Active Users'} />
        <DataBox icon={Page} data={'Not A Sub'} info={'Language'} />
        <DataBox icon={Face} data={'Not A Sub'} info={'Created'} />
        <DataBox icon={Time} data={'Not A Sub'} info={'Friends'} />
      </div>
    );
  }
  if (!data && !error) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.dataContainer}>
      <DataBox icon={Heart} data={data.data.display_name_prefixed} info={''} />
      <DataBox icon={Friend} data={data.data.active_user_count} info={'Subs'} />
      <DataBox
        icon={Chart}
        data={data.data.subscribers}
        info={'Active Users'}
      />
      <DataBox icon={Page} data={data.data.lang} info={'Language'} />
      <DataBox icon={Face} data={data.data.created_utc} info={'Created'} />
      <DataBox icon={Time} data={'TEMP'} info={'Friends'} />
    </div>
  );
};

export default DataContainer;
