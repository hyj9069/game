import "./App.css";
import { useEffect, useRef, useState } from "react";
import Box from "./components/Box";
import paper from "./components/img/paper.png";
import rock from "./components/img/rock.png";
import scissors from "./components/img/scissors.png";

function App() {
  const choice = {
    rock: {
      name: "rock",
      img: rock,
    },
    scissors: {
      name: "scissors",
      img: scissors,
    },
    paper: {
      name: "paper",
      img: paper,
    },
  };

  const [userSelect, setUserSelect] = useState(choice["rock"]);
  const [computerSelect, setComputerSelect] = useState(choice["scissors"]);
  const [result, setResult] = useState("");
  const timeRef = useRef();

  useEffect(() => {
    start();
    return () => clearInterval(timeRef.current);
  }, []);

  const start = () => {
    timeRef.current = setInterval(() => {
      let itemArray = Object.keys(choice);
      let random = Math.floor(Math.random() * 3);
      let final = itemArray[random];
      // console.log(choice[final]);
      setComputerSelect(choice[final]);
    }, 500);
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    clearInterval(timeRef.current);
    setTimeout(start, 1000); // 3초 후에 다시 시작
    // console.log(computerSelect);
    setResult(judgement(choice[userChoice], computerSelect));
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "rock") return computer.name == "scissors" ? "Win" : "Lose";
    else if (user.name == "scissors") return computer.name == "paper" ? "Win" : "Lose";
    else if (user.name == "paper") return computer.name == "rock" ? "Win" : "Lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
