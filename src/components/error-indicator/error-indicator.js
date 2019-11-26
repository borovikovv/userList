import React from 'react';
import s from './error-indicator.module.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className={s.errorIndicator}>
      <img className={s.errorImg}
      src={icon}
      alt="error"/>
      <h1> OOPS... </h1>
      <span>
          Что-то пошло не так!
      </span>
      <span className={s.span2}>
          Мы отправили профессионалов, <br /> чтоб подчинить поломку...
      </span>
    </div>
  )
};

export default ErrorIndicator;
