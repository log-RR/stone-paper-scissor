
// storing elements thats going to userScore

const userScore = $("#user-score");
const computerScore = $("#computer-score");
const resultDescription = $("#result-description h3");
const rock = $("#Rock");
const paper = $("#Paper");
const scissor = $("#Scissor");

// live scores of player and computerChoice

let userScoreLive = 0;
let computerScoreLive = 0;

// getting computer choice

function computerChoice() {
  choiceShortForm = ["r", "p", "s"]
  randomNumber = Math.floor(Math.random() * 3);
  return choiceShortForm[randomNumber]
}

// geting long forms

function longForm(shortForm) {
  if (shortForm == "r")
    return "Rock";
  else if (shortForm === "p")
    return "Paper";
  else
    return "Scissor";
}

// win function

function win(userChoice, computerChoice) {
  userScoreLive++;
  computerScoreLive = computerScoreLive;
  userScore.text(userScoreLive);
  const user = "user".fontsize(4).sub();
  const comp = "comp".fontsize(4).sub();
  resultDescription.html(longForm(userChoice) + user + " beats " + longForm(computerChoice) + comp + ". You win!!!😎😎😎");
  $("#" + longForm(userChoice)).addClass("win");
  setTimeout(() => $("#" + longForm(userChoice)).removeClass("win"), 500);


}

// loss function

function loss(userChoice, computerChoice) {
  computerScoreLive++;
  userScoreLive = userScoreLive;
  computerScore.text(computerScoreLive);
  const user = "user".fontsize(4).sub();
  const comp = "comp".fontsize(4).sub();
  resultDescription.html(longForm(userChoice) + user + " losses to " + longForm(computerChoice) + comp + ". You loss!!!😥😥😥");
  $("#" + longForm(userChoice)).addClass("loss");
  setTimeout(() => $("#" + longForm(userChoice)).removeClass("loss"), 500);
}

// draw function

function draw(userChoice, computerChoice) {
  const user = "user".fontsize(4).sub();
  const comp = "comp".fontsize(4).sub();
  resultDescription.html(longForm(userChoice) + user + " equals " + longForm(computerChoice) + comp + ". its draw!!!🥱🥱🥱");
  $("#" + longForm(userChoice)).addClass("draw");
  setTimeout(() => $("#" + longForm(userChoice)).removeClass("draw"), 500);
}

// deciding win,loss or draw function

function game(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loss(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;

  }


}

// starting function [adding event listeners to buttons]

main()

function main() {
  rock.click(function() {
    game("r", computerChoice())
  });

  paper.click(function() {
    game("p", computerChoice())
  });

  scissor.click(function() {
    game("s", computerChoice())
  });
}
