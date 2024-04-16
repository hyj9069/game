import React, { useCallback, useEffect } from 'react';
import { useState,useRef } from 'react';
import paper from './img/paper.png'
import rock from './img/rock.png'
import scissors from './img/scissors.png'

function Game () {
  const timeRef = useRef(null);
  const [img, setImg] = useState(paper)
  const [userImg, setUserImg] = useState()
  let imgArray = new Array();
  imgArray[0] = paper
  imgArray[1] = rock
  imgArray[2] = scissors

  const start = useEffect(() => {
    timeRef.current = setInterval(() => {
      let random = Math.floor(Math.random() * 3);
      setImg(imgArray[random]);
    },50000);
    return () => {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  },[img]);

  const stop = (user) =>{
    clearInterval(timeRef.current);
    console.log(timeRef.current)
    
    // timeRef.current = null;

    if(user === "scissors") {
      let a = 2
      setUserImg(imgArray[a]);
    }else if(user === "rock") {
      let b = 1
      setUserImg(imgArray[b])
    }else if(user === "paper") {
      let c = 0
      setUserImg(imgArray[c])
    }
    setTimeout(() => {
      timeRef.current = setInterval(() => {
        let random = Math.floor(Math.random() * 3);
        setImg(imgArray[random]);
        console.log(random);
      },100);
    },1000)
    
  }

  return (
    <div>
      <div className='img_area'>
        <img src={img} alt="" />
        <img src={userImg} alt="" />
        <button onClick={() => stop('scissors')} value="scissors">가위</button>
        <button onClick={() => stop('rock')} value="rock">바위</button>
        <button onClick={() => stop('paper')} value='paper'>보</button>
      </div>
    </div>
  );
}

export default Game;