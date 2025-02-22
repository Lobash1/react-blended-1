import style from './StatisticsItem.module.css';

const StatisticsItem = ({ icon: Icon, total, title }) => {
  return (
    <>
      <Icon className={style.icon} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
