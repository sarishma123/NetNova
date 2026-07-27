const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function () {
    document.querySelector(".think-section").scrollIntoView({
        behavior: "smooth"
    });
});