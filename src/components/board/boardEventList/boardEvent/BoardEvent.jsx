import css from './BoardEvent.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart } from '../../../utils/time.js';
import { formatEventDuration } from '../../../utils/time.js';

export const BoardEvent = ({
  name,
  location,
  speaker,
  time: { start, end },
  type,
}) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className={css.icon}>
          <FaMapMarkerAlt />
        </i>
        {location}
      </p>
      <p className={css.info}>
        <i className={css.icon}>
          <FaUserAlt />
        </i>
        {speaker}
      </p>
      <p className={css.info}>
        <i className={css.icon}>
          <FaCalendarAlt />
        </i>
        {formattedStart}
      </p>
      <p className={css.info}>
        <i className={css.icon}>
          <FaClock />
        </i>
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};
