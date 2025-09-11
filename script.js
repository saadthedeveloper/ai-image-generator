let themeButton = document.querySelector("#theme-button");
let body = document.querySelector("body");
let mainContainer = document.querySelector("#main-container");
let diceIcon = document.querySelector("#dice-icon");
let textArea = document.querySelector("#text-area");

themeButton.addEventListener('click', () => {
    if (themeButton.classList.contains("light-theme-button")) {
        //Theme Button - will turn dark
        themeButton.classList.remove("light-theme-button");
        themeButton.classList.add("dark-theme-button");
        themeButton.classList.remove("fa-moon");
        themeButton.classList.add("fa-sun");

        //Body - will turn dark
        body.classList.remove("light-theme-body");
        body.classList.add("dark-theme-body");

        //Main Container - will turn dark
        mainContainer.classList.add("dark-theme-main-container");
        mainContainer.classList.remove("light-theme-body-main-container");
    } else {
        //Theme Button - will turn light
        themeButton.classList.remove("dark-theme-button");
        themeButton.classList.add("light-theme-button");
        themeButton.classList.remove("fa-sun");
        themeButton.classList.add("fa-moon");
        
        //Body - will turn light
        body.classList.remove("dark-theme-body");
        body.classList.add("light-theme-body");

        //Main Container - will turn light
        mainContainer.classList.remove("dark-theme-main-container");
        mainContainer.classList.add("light-theme-main-container");
    }
})

//Random Prompt Script

diceIcon.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 21);
    textArea.innerText = prompts[randomNumber]; 
    textArea.value = prompts[randomNumber];

});