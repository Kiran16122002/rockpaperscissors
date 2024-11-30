let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const show=document.getElementsByClassName("result")
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#robot");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const drawGame = () =>{
  msg.innerText = "it's a draw";
  show[0].classList.remove("hide")
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "user wins";
    show[0].classList.remove("hide")
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "robot wins";
    show[0].classList.remove("hide")
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
     showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    
    playGame(userChoice);
  });
});