let count = 0;


function updateCounter() {
    document.getElementById('count').innerText = count;
}


function increase() {
    count += 1;
    updateCounter();
}


function decrease() {
    count -= 1;
    updateCounter();
}


function reset() {
    count = 0;
    updateCounter();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("greetBtn").addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        if (name === "") {
            alert("Please enter your name");
        } else {
            document.getElementById("welcome").innerText = "Welcome, " + name;
        }
    });

    updateCounter(); 
});
