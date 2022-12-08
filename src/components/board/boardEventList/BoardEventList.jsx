import PropTypes from 'prop-types';
import { BoardEvent } from './boardEvent/BoardEvent';
import { Board } from './BoardEvent.styled';
export const BoardEventList = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, time, type }) => (
        <BoardEvent
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          time={time}
          type={type}
        />
      ))}
    </Board>
  );
};
BoardEventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.object,
    })
  ),
};
