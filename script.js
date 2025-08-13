// PART 1: Check Voting Eligibility 
function checkAge() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("ageResult").innerText =
      "You are eligible to vote!";
  } else {
    document.getElementById("ageResult").innerText =
      "You are too young to vote.";
  }
}

// PART 2: Functions => Add two numbers
function addNumbers(a, b) {
  return a + b;
}

function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = addNumbers(num1, num2);

  document.getElementById("sumResult").innerText = `Sum: ${sum}`;
}

// PART 3: Loop Through All fruits
function showFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  let fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = "";

  // Using forEach loop
  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

// PART 4: DOM Manipulation
function changeTitle() {
  document.querySelector("header h1").innerText = "Title Changed: JavaScript is Awesome!";
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function addNewItem() {
  let li = document.createElement("li");
  li.textContent = "New Dynamic Item";
  document.getElementById("itemList").appendChild(li);
}
