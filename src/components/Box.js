import React, { useState } from 'react';
function Box(props) {
  let result;

  if(props.title==="Computer" && props.result !=="Tie" && props.result !==""){
      result = props.result === "Win"?"Lose":"Win"
  }else{
      result = props.result;
  }

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
}

export default Box;