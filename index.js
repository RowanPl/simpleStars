let score = 0;

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");

    button.addEventListener("click", function() {
        setStars(score);
        console.log("Button clicked");
    });

    const ratingRadios = document.getElementsByName("rating");

    ratingRadios.forEach(radio => {
        radio.addEventListener("change", function() {
            console.log("Selected rating:", radio.value);
            score = parseFloat(radio.value); // Parse the value to an integer
        });
    });
});

function setStars(score) {
    const starsInner = document.querySelector(".stars-inner");
    console.log("Stars inner:", starsInner);
    console.log(score)
    starsInner.style.width = `${score * 20}%`;
    console.log(starsInner.style.width)// Removed ".value" since "score" is already a number
}
