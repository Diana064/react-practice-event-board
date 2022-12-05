import React from 'react';
import css from './PageTitle.module.css';
export const PageTitle = ({ text }) => {
  return (
    <>
      <h1 className={css.title}>{text}</h1>
    </>
  );
};
