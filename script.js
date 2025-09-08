let themeButton = document.querySelector("#theme-button");
let body = document.querySelector("body");

themeButton.addEventListener('click', () => {
    if (themeButton.classList.contains("light-theme")) {
        //Theme Button
        themeButton.classList.remove("light-theme");
        themeButton.classList.add("dark-theme")
    } else {
        //Theme Button
        icon.classList.remove("dark-theme");
        icon.classList.add("light-theme");
    }
})