import React from "react";
import './general.css'

// const Input = (props) => {
//   // const HendleInput = (e) => {}
//   // <label className='lable'> {props.labela}
//     <input type="text" className='input' value='' />
//   // </label>
// }
const Input = (props) => {
  return (
    <label htmlfor="">{props.label}
      <input
        // className={classes.button}
        className='input'
        type='text'
        onClick={props.onClick}
      >
          {props.children}
      </input>
    </label>
  );
};

export default Input;