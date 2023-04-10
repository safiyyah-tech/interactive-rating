const ratingNumber = document.querySelectorAll(".number-list");
const submitBtn = document.getElementsByClassName("button");
const textRate = document.getElementById("rating-text");
const startBtn = document.getElementById("startButton");

// Add the event listener to the rating number
for (let i = 0; i < ratingNumber.length; i++) {
    const el = ratingNumber[i];
    
    el.addEventListener('click', function () {
        // add active class to the div clixkeed so that user can see which div they clicked.
        // Create a variable outside this for loop and set it to 0 initially. Set it to the number on the div that is clicked here 
    });
}

submitBtn.addEventListener('click', () => {
    // submits the number and displays a message thank you for rating us 
    // You can save rating in localStorage
})