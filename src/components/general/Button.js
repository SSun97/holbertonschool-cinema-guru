import React from "react";
// import classes from "./Button.module.css";
import './general.css';

const Button = (props) => {
  return (
    <button
      // className={classes.button}
      className='button'
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;