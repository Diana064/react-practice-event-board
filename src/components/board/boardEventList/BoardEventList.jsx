import { BoardEvent } from './boardEvent/BoardEvent';
import css from './BoardEventList.module.css';
export const BoardEventList = ({ events }) => {
  return (
    <div className={css.eventBoard}>
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
    </div>
  );
};
