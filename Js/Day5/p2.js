function openChildWindow() {
    let child = window.open('', '', 'width=400,height=200');
    child.document.write('<p id="message"></p>');
    let text = "Welcome!";
    let i = 0;
    function showText() {
        if (i < text.length) {
            child.document.getElementById("message").innerHTML += text[i];
            i++;
            setTimeout(showText, 300);
        }
    }
    showText();
    setTimeout(() => child.close(), 5000);
}

let clockInterval;
function startClock() {
    alert("Clock Started");
    function updateClock() {
        document.getElementById("clock").innerText = new Date().toLocaleTimeString();
    }
    clockInterval = setInterval(updateClock, 1000);
    updateClock();
}

document.addEventListener("keydown", function(event) {
    // if (event.altKey && event.key === "w") {
    if (event.key === "w") {
        clearInterval(clockInterval);
        alert("Clock stopped");
    }
});
