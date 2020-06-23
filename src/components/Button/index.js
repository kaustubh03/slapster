import React from 'react';

import s from "./index.module.scss"


const Button = (props) => {
  return (
    <div className={s.button} onClick={props.onClickHandler}>
      {props.children}
    </div>
  );
};

export default Button;