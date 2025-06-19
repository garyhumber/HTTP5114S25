let count = localStorage.getItem('counter')
  ? parseInt(localStorage.getItem('counter'), 10)
  : 0;
updateCounter();

const getStepValue = () => {
  const stepInput = document.getElementById('step');
  const step = parseInt(stepInput.value, 10);
  if (isNaN(step) || step <= 0) {
    alert('Please enter a positive step value.');
    return 1;
  }
  return step;
};

const increase = () => {
  count += getStepValue();
  updateCounter();
  console.log('Counter increased');
};

const decrease = () => {
  count -= getStepValue();
  if (count < 0) {
    alert('Counter cannot go below 0');
    count = 0;
  }
  updateCounter();
  console.log('Counter decreased');
};

const reset = () => {
  count = 0;
  updateCounter();
  console.log('Counter reset');
};

function updateCounter() {
  document.getElementById('count').textContent = count;
  localStorage.setItem('counter', count);
}

document.getElementById('greetBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  if (!name) {
    alert('Please enter your name');
    return;
  }
  document.getElementById('welcome').textContent = `Welcome, ${name}`;
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
