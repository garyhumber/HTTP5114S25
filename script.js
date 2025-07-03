
let count = 0;


const updateCounter = () => {
    document.getElementById('count').textContent = count;
};


const increase = () => {
    const step = parseInt(document.getElementById("step")?.value) || 1;
    count += step;
    updateCounter();
    console.log("Counter increased");
};


const decrease = () => {
    const step = parseInt(document.getElementById("step")?.value) || 1;
    count -= step;
    updateCounter();
    console.log("Counter decreased");

    
    if (count < 0) {
        alert("⚠️ Counter is below 0!");
    }
};


const reset = () => {
    count = 0;
    updateCounter();
    console.log("Counter reset");
};


document.getElementById('greetBtn').addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        alert("Please enter your name");
    } else {
        document.getElementById("welcome").textContent = "Welcome, " + name;
    }
});


document.getElementById("incrbutton").addEventListener("click", increase);
document.getElementById("descbutton").addEventListener("click", decrease);
document.getElementById("resetBtn").addEventListener("click", reset);


document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("Theme toggled");
});