import styles from './dataContainer.module.scss';
import useSubreddit from '../../hooks/useSubreddit';
import Heart from '../../assets/heart-outline.svg';
import Friend from '../../assets/people-outline.svg';
import Chart from '../../assets/stats-chart-outline.svg';
import Page from '../../assets/newspaper-outline.svg';
import Face from '../../assets/person-circle-outline.svg';
import Time from '../../assets/timer-outline.svg';
import DataBox from './dataBox';

const aboutSub = [
  {
    icon: Heart,
    info: '',
    data: 'display_name_prefixed',
  },
  {
    icon: Friend,
    info: 'Subs',
    data: 'active_user_count',
  },
  {
    icon: Chart,
    info: 'Active Users',
    data: 'subscribers',
  },
  {
    icon: Page,
    info: 'Language',
    data: 'lang',
  },
  {
    icon: Time,
    info: 'Created',
    data: 'created_utc',
  },
  {
    icon: Face,
    info: 'TEMP',
    data: '',
  },
];

const DataContainer = ({ url }) => {
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
      {aboutSub.map((item) => {
        return (
          <DataBox
            key={item.info}
            icon={item.icon}
            data={data.error ? data.error : data.data[item.data]}
            info={item.info}
          />
        );
      })}
    </div>
  );
};

export default DataContainer;
