let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");

const calculateDoggieAge = (humanAge) => {
  let doggieAge = humanAge * 7;
  result.innerHTML = "Your doggie is " + doggieAge + "yrs old in hooman years!";
  console.log(result);
  console.log(doggieAge);
};

equalsButton.addEventListener("click", () => {

  let userInput = Number(input.value);
  calculateDoggieAge(userInput);
});


clearButton.onclick = function () {
  input.value = "";
  result.innerHTML = "";
};
