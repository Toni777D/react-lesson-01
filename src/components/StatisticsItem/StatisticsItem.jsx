import styled from './Statistics.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ date, icon }) => {
  console.log(icon);

  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ size: 60 }}>{icon}</IconContext.Provider>

      <span className={styled.counter}>{date.total}</span>
      <p className={styled.text}>{date.title}</p>
    </li>
  );
};
