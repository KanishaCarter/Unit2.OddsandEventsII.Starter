/* Numbers are moved into the correct category based on whether odd or even.
 * Numbers in the bank, odd category, and even category are stored as state variables.
 * Functions are used to organize logic involving state changes.
 * The application is rerendered whenever state changes.
 * UI elements are organized into component functions.
 * Event listeners modify state. They do not directly modify the document */

// Form that allows users to input a number.

function init() {

    // Store body element as body for DOM manipulation
    const body = document.querySelector("body");

    function userForm() {
        // Store formContainer div element
        const formContainer = document.createElement("div");
        // Added form element as child of form container div
        body.appendChild(formContainer);
        document.formContainer.innerHTML = "<form></form>";
        

        // Stored form element as form
        const form = document.querySelector("form");
        form.document.innerHTML = "<label for="userName">Name</label><br>";
        // Append form to form container div
        formContainer.appendChild(form);
        // Store label element to label
        const label = document.querySelector("label");

        document.label.innerHTML = "<input type="text" value="name"><br>";
        
        // Stored button element as button
        const button = document.createElement("button");
        
    }

}
// When click "Add number" button, number from input is added to number bank.
// The number bank displays all numbers from form input.
// When click "Sort 1" button, first number in the number bank is removed and placed into odd or even category.
// When click "Sort All" button, all numbers in the number bank are moved into odd or even category.
