/* Numbers are moved into the correct category based on whether odd or even.
 * Numbers in the bank, odd category, and even category are stored as state variables.
 * Functions are used to organize logic involving state changes.
 * The application is rerendered whenever state changes.
 * UI elements are organized into component functions.
 * Event listeners modify state. They do not directly modify the document */

// Form that allows users to input a number.



// Store body element as body for DOM manipulation

function clearNumbers() {
    numberBank = [];
    oddNumbers = [];
    evenNumbers = [];
}


function numberBankApp() {  
    const body = document.querySelector("body");
    const formContainer = document.createElement("div");
    const formInstructions = document.createElement("p");
    formInstructions.textContent = "Submit a number.";
    const form = document.createElement("form");
    formContainer.append(formInstructions);
    form.innerHTML = `
    <label>Number</label>
    <input type="text"><br><br>
    <button id="add">Add Number</button>
    <button id="sort1">Sort One</button>
    <button id="sortAll">Sort All</button>
    `
    body.appendChild(formContainer);
    formContainer.appendChild(form);

    const numberBank = [];
    const oddNumbers = [];
    const evenNumbers = [];

    const input = document.querySelector("input");

    const add = document.getElementById("add");
    const sort1 = document.getElementById("sort1");
    const sortAll = document.getElementById("sortAll");

    const h2 = document.createElement("h2");
    const numbersContainer = document.createElement("div");
    body.appendChild(numbersContainer);
    numbersContainer.appendChild(h2);

    // The number bank displays all numbers from form input.
    add.addEventListener("click", (e) => {
        e.preventDefault();
        numberBank.push(input.value);
        h2.textContent = `${numberBank}`;  
    })

    // When click "Sort 1" button, first number in the number bank is removed and placed into odd or even category.
    sort1.addEventListener("click", (e) => {
        e.preventDefault();
        numberBank.push(input.value);
        const firstNumber = numberBank[0];
        numberBank.shift;
        if ((firstNumber % 2) === 0) {
            evenNumbers.push(firstNumber);
        } else {
            oddNumbers.push(firstNumber);
        }
        h2.textContent = `All Numbers: ${numberBank} Odd: ${oddNumbers} | Even ${evenNumbers}`;
    })

    // When click "Sort All" button, all numbers in the number bank are moved into odd or even category.
    sortAll.addEventListener("click", (e) => {
        e.preventDefault();
        numberBank.push(input.value);
        numberBank.forEach((number) => {
            if ((number % 2) === 0) {
                evenNumbers.push(number);
            }
            if ((number % 2) !== 0) {
                oddNumbers.push(number);
            }
            h2.textContent = `All Numbers: ${numberBank} Odd: ${oddNumbers} | Even ${evenNumbers}`;
        })
    })
}

numberBankApp();
clearNmbers();

// When click "Sort All" button, all numbers in the number bank are moved into odd or even category.
