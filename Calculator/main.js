const clearDisplay = (value) => {
  document.getElementById("display").value = value;
};

const getInput = (value) => {
  document.getElementById("display").value += value;
};

const deleteInput = () => {
  let length = document.getElementById("display").value.length;
  document.getElementById("display").value = document
    .getElementById("display")
    .value.substring(0, length - 1);
};

const calculateResult = () => {
  let equation = document.getElementById("display").value;

  let result = Function("return " + equation)();
  result = result.toString();

  if (result.includes(".")) {
    result = Number(result).toFixed(2);
  }
  document.getElementById("display").value = "";
  document.getElementById("display").value += result;
};

// console.log(Function());
// console.log(Function("return " + 3 + 4)());

//implment exponential, root, squared

let test = "9-9+3";
console.log(test);
console.log(test.substring(0, test.length - 1));
