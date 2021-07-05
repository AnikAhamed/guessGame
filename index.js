let secret = Math.trunc(Math.random() * 10) + 1;
// console.log(secret);

// document.querySelector(".secret").textContent = secret;
let Score = 10;
const clickFunction = function () {
  const inputV = Number(document.querySelector(".inputT").value);
  if (document.querySelector(".S").textContent === "0") {
    Score = 10;
    document.querySelector(".S").textContent = "10";
    document.querySelector(".SL").textContent = "your life";
    document.querySelector(".secret").textContent = "🤫";
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.querySelector(".btn").value = "Check";
    document.querySelector(".answer").textContent = "put yor number";
    secret = Math.trunc(Math.random() * 10) + 1;
    // console.log(secret);
  } else if (!inputV) {
    //EMPTY
    document.querySelector(".answer").textContent = "There is no number";
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.getElementsByClassName("spanText")[0].style.color = "#185adb";
    document.getElementsByClassName("spanText")[1].style.color = "#185adb";
    document.querySelector(".secret").textContent = "🤫";
    document.querySelector(".btn").style.backgroundColor = "#9ede73";
    //LOSET
  } else if (1 === Score) {
    document.querySelector(".answer").textContent = "you lost The game";
    document.querySelector(".SL").textContent = "You Have No Life";
    document.querySelector(".inputT").value = "";
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.querySelector(".S").textContent = "0";
    document.querySelector("body").style.backgroundColor = "#e40017";
    document.getElementsByClassName("spanText")[0].style.color = "#185adb";
    document.getElementsByClassName("spanText")[1].style.color = "#185adb";
    document.querySelector(".btn").style.backgroundColor = "#9ede73";
    document.querySelector(".secret").textContent = "😖";
    document.querySelector(".btn").value = "Try Again";
    //WIN
  } else if (document.querySelector(".btn").value === "Try Again") {
    document.querySelector(".btn").value = "Check";
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.querySelector(".btn").style.backgroundColor = "#9ede73";
    document.querySelector(".inputT").value = "";
    document.querySelector(".secret").textContent = "🤫";
    document.querySelector(".answer").textContent = "There is no number";
  } else if (secret === Number(inputV)) {
    document.querySelector(".answer").textContent = "you are currect";
    if (
      Number(document.querySelector(".HS").textContent) <
      Number(document.querySelector(".S").textContent)
    ) {
      document.querySelector(".HS").textContent =
        document.querySelector(".S").textContent;
    }
    secret = Math.trunc(Math.random() * 10) + 1;
    document.querySelector(".S").textContent = 10;
    Score = 10;
    document.querySelector("body").style.backgroundColor = "#9ede73";
    document.getElementsByClassName("spanText")[0].style.color = "#185adb";
    document.getElementsByClassName("spanText")[1].style.color = "#185adb";
    document.querySelector(".secret").textContent = "🏆";
    document.querySelector(".btn").style.backgroundColor = "#f7ea00";
    document.querySelector(".btn").value = "Try Again";
    //LOW
  } else if (secret > Number(inputV)) {
    document.querySelector(".answer").textContent = "This number is Low";
    Score--;
    document.querySelector(".S").textContent = Score;
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.getElementsByClassName("spanText")[0].style.color = "#185adb";
    document.getElementsByClassName("spanText")[1].style.color = "#185adb";
    document.querySelector(".secret").textContent = "🤫";
    document.querySelector(".btn").style.backgroundColor = "#9ede73";
    //HIGH
  } else if (secret < Number(inputV)) {
    document.querySelector(".answer").textContent = "This number is High";
    Score--;
    document.querySelector(".S").textContent = Score;
    document.querySelector("body").style.backgroundColor = "#f7ea00";
    document.getElementsByClassName("spanText")[0].style.color = "#185adb";
    document.getElementsByClassName("spanText")[1].style.color = "#185adb";
    document.querySelector(".secret").textContent = "🤫";
    document.querySelector(".btn").style.backgroundColor = "#9ede73";
  }
};

document.querySelector(".btn").addEventListener("click", clickFunction);
