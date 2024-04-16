<<<<<<< HEAD
import React, { useCallback, useEffect } from 'react';
=======
import React, { useCallback } from 'react';
>>>>>>> 54751035aa8e4f7de3d81c9bb22d73ffad7fbd58
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

<<<<<<< HEAD
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
=======
  const start = useCallback(() => {
    if(timeRef.current !== null) {
      return;
    }
    timeRef.current = setInterval(() => {
      let random = Math.floor(Math.random() * 3);
      setImg(imgArray[random]);
      console.log(random);
    },300)
  },[]);

  const stop = useCallback((user) => {
    if(timeRef == null) {
      return;
    }
    clearInterval(timeRef.current);
    console.log(timeRef.current)
    
    timeRef.current = null;

>>>>>>> 54751035aa8e4f7de3d81c9bb22d73ffad7fbd58

    if(user === "scissors") {
      let a = 2
      setUserImg(imgArray[a]);
<<<<<<< HEAD
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
=======
      console.log(a)
    }else if(user === "rock") {
      let b = 1
      setUserImg(imgArray[b])
      console.log(b)
    }else if(user === "paper") {
      let c = 0
      setUserImg(imgArray[c])
      console.log(c)
    }
  },[])
>>>>>>> 54751035aa8e4f7de3d81c9bb22d73ffad7fbd58



  return (
    <div>
      <div className='img_area'>
        <img src={img} alt="" />
<<<<<<< HEAD
=======
        <button onClick={start}>시작</button>
>>>>>>> 54751035aa8e4f7de3d81c9bb22d73ffad7fbd58
        <img src={userImg} alt="" />
        <button onClick={() => stop('scissors')} value="scissors">가위</button>
        <button onClick={() => stop('rock')} value="rock">바위</button>
        <button onClick={() => stop('paper')} value='paper'>보</button>
      </div>
    </div>
  );
}

export default Game;