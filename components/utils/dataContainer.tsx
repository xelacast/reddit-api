import useSubreddit from '../../hooks/useSubreddit';
import DataBox from './dataBox';
import styles from './dataContainer.module.scss';
import Heart from '../../assets/heart-outline.svg';
import Friend from '../../assets/people-outline.svg';
import Chart from '../../assets/stats-chart-outline.svg';
import Page from '../../assets/newspaper-outline.svg';
import Face from '../../assets/person-circle-outline.svg';
import Time from '../../assets/timer-outline.svg';

const iconArr = [Heart, Friend, Chart, Page, Time, Face];

const DataContainer = ({ url, info }) => {
  const { data, error } = useSubreddit(url);
  if (!data && !error) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.dataContainer}>
      {/* <DataBox icon={Heart} data={data.data.display_name_prefixed} info={''} />
      <DataBox icon={Friend} data={data.data.active_user_count} info={'Subs'} />
      <DataBox
        icon={Chart}
        data={data.data.subscribers}
        info={'Active Users'}
      />
      <DataBox icon={Page} data={data.data.lang} info={'Language'} />
      <DataBox icon={Face} data={data.data.created_utc} info={'Created'} />
      <DataBox icon={Time} data={'TEMP'} info={'Friends'} /> */}
      {info.map((item, i) => {
        return (
          <DataBox
            key={item.info}
            icon={iconArr[i]}
            data={data?.data ? data.data[item.data] : 'No Data'}
            info={item.info}
          />
        );
      })}
    </div>
  );
};

export default DataContainer;
