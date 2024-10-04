
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
function createBoxes(amount) {
    boxesContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    let boxSize = 30;

    for (let i = 1; i <= amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.textContent = `${boxSize}x${boxSize}`;
        fragment.appendChild(box);

        boxSize += 10;
    }

    boxesContainer.appendChild(fragment);
}  

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value.trim());

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function randomither(max) {
  return Math.floor(Math.random() * max);
}

const box = document.createElement('div');
moveOn();
document.body.append(box);
box.addEventListener('click', moveOn);
function moveOn() {
box.style.cssText = forms[randomither(forms.length)];
box.style.backgroundColor = getRandomHexColor();
box.style.position = 'absolute';
box.style.top = `${randomither(100)}%`;
box.style.left = `${randomither(100)}%`;
}