

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email,
        password,
    };
    console.log(formData);

    form.reset();
    
});
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btn = document.querySelector('#passwordButton');
const input = document.querySelector('#passwordInput');

btn.addEventListener('click', change);
function change() {
    
    if (btn.textContent === 'Розкрити') {
        input.style.color = 'inherit';
        btn.textContent = 'Приховати';
    } else {
        input.style.color = 'transparent';
        btn.textContent = 'Розкрити';
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  input.addEventListener('input', changeColor);

  function changeColor() {
    btn.style.backgroundColor = getRandomHexColor();
  }