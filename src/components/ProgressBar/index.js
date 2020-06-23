import React, { useEffect } from 'react';

import s from "./index.module.scss"

const getProgressClass = (color) =>{
    switch(color){
        case "red":
            return "red";
        case "gold":
            return "gold";
        case "green":
            return "green";
        default:
            return "blue";
    }
}

const ProgressBar = ({ value = 0, color='blue' }) => {
  const [style, setStyle] = React.useState({});
  useEffect(function(){
    const newStyle = {
      opacity: 1,
      width: `${value}%`,
      value:value
    };

    setStyle(newStyle);
  },[]);
  
  useEffect(function(){
    if (value !== style.value){
      const newStyle = {
        opacity: 1,
        width: `${value}%`,
        value: value
      };

      setStyle(newStyle);
    }

  }, [style,value]);
  
  return (
    <div className={s.progress}>
      <div
        className={`${s.progressDone} ${s[getProgressClass(color)]}`}
        style={style}
      >
        {value}
      </div>
    </div>
  );
};

export default ProgressBar;