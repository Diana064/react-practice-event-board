import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart } from '../../../utils/time.js';
import { formatEventDuration } from '../../../utils/time.js';
import { Event, Title, Info, Icon, Chip } from './BoardEvent.styled';

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
    <Event>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt />

        {location}
      </Info>
      <Info>
        <FaUserAlt />

        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />

        {formattedStart}
      </Info>
      <Info>
        <FaClock />

        {duration}
      </Info>
      <Chip eventtype={type}>{type}</Chip>
    </Event>
  );
};
BoardEvent.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  time: PropTypes.exact({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
};
