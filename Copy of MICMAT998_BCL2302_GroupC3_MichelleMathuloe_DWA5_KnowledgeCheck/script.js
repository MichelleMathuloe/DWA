// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;


  if (dividend ==="" || divider === ""){

    result.innerText = "Division not performed. Both values are required in inputs. Try again."

  }else if(dividend  === "" || divider < 0){

    result.innerText = "Division not performed. Invalid number provided.Try again"
    throw console.error("Call stack");

  }else if (isNaN(dividend) || isNaN(divider)){
    result.innerText = "Something critical went wrong.Please reaload the page."
    throw console.error("Call stack")
  }else result.innerText = Math.floor(result.innerText)
});