function connect() {
  let question = prompt("Are you a Gamer? Yes or No");
  let name = prompt("What is your first name?");
  let age = prompt("How old are you");

  if (age >= 18) {
    alert(
      "Hi " +
        name +
        ", lets connect! Look for me on Steam(BigMommaGaming321), XBOX(BigMGaming4185), & PS(Big_Momma_Gaming). 🎮 Happy Gaming 🎮"
    );
  } else {
    alert(
      "Sorry " +
        name +
        ", 😔 Due to games played and content we are not able to connect for now. 🎮 Happy Gaming 🎮 "
    );
  }
}

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let button = document.querySelector("#connect-btn");
button.addEventListener("click", connect);

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
