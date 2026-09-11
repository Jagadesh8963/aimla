
// Function to display an alert message
function greetUser() {
 alert("Hello from the external JavaScript file!");
}
// Execute after HTML is completely loaded
document.addEventListener("DOMContentLoaded", function () {
 const myButton = document.getElementById("myButton");
 if (myButton) {
 myButton.addEventListener("click", greetUser);
 }
});