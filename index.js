document.addEventListener("DOMContentLoaded", function() {
    const ratingRadios = document.getElementsByName("rating");

    ratingRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            console.log("Selected rating:", radio.value);
        });
    });
});
