let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let rand = alpha[Math.floor(Math.random() * 26)];

let main = document.querySelector("main");

document.body.addEventListener('keypress', function(event) {
    if (event.key === rand) {
        let tag = document.createElement("h3");
        tag.textContent = `SECRET KEY PRESSED ${rand}`;
        main.appendChild(tag);
        rand = alpha[Math.floor(Math.random() * 26)];
    }
});