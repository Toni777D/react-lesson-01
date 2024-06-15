import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const icons = [
    <FaRegThumbsUp key="0" />,
    <MdPeople key="1" />,
    <MdOutlineProductionQuantityLimits key="2" />,
    <GiTreeDoor key="3" />,
  ];

  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <StatisticsItem key={stat.id} date={stat} icon={icons[index]} />
        ))}
      </ul>
      ;
    </>
  );
};
