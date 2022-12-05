import React from 'react';
import { BoardEventList } from './board/boardEventList/BoardEventList';
import events from './events.json';

import { PageTitle } from './pageTitle/PageTitle';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <BoardEventList events={events} />
    </>
  );
};
