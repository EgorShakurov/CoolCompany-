let form = document.getElementById('order-form'),
    inputName = document.getElementById('user-name'),
    inputPhone = document.getElementById('user-phone'),
    inputEmail = document.getElementById('user-email'),
    selectOption = document.getElementById('option-select'),
    userText = document.getElementById('user-text')
    inputAll = document.querySelectorAll('.style-input');

var isName = false,
    isPhone = false,
    isEmail = false,
    isSelect = false;

function validateName () {
    const errorName = document.getElementById('error-name');
    if (inputName.value.trim() === '') {
        inputName.classList.add('error');
        errorName.textContent = 'Имя не может быть пустым';
        isName = false;
    } else {
        inputName.classList.remove('error');
        errorName.textContent = '';
        isName = true;
    }   
}

inputName.addEventListener('blur', validateName);

function validatePhone () {
    const errorPhone = document.getElementById('error-phone');
    const phoneReg = /^[+]?[0-9]{7,15}$/;
    if (inputPhone.value.trim() === '') {
        inputPhone.classList.add('error');
        errorPhone.textContent = 'Введите номер телефона';
        isPhone = false;
    } 
    else if (!phoneReg.test(inputPhone.value.trim())) {
        inputPhone.classList.add('error');
        errorPhone.textContent = 'Введите корректный номер телефона';
        isPhone = false;
    } 
    else {
        inputPhone.classList.remove('error');
        errorPhone.textContent = '';
        isPhone = true;
    }
}

inputPhone.addEventListener('blur', validatePhone);

function validateEmail () {
    const errorEmail = document.getElementById('error-email');
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    if (inputEmail.value.trim() === '') {
        inputEmail.classList.add('error');
        errorEmail.textContent = 'Введите почту';
        isEmail = false;
    }
    else if (!emailReg.test(inputEmail.value.trim())) {
        inputEmail.classList.add('error');
        errorEmail.textContent = 'Введите корректную почту';
        isEmail = false;
    }
    else {
        inputEmail.classList.remove('error');
        errorEmail.textContent = '';
        isEmail = true;
    }
}

inputEmail.addEventListener('blur', validateEmail);

function validateSelect () {
    const errorSelect = document.getElementById('error-select');
    if (selectOption.value.trim() === 'Выбор услуги...') {
        selectOption.classList.add('error');
        errorSelect.classList.add('error-select');
        errorSelect.textContent = 'Поле не должно быть пустым';
        isSelect = false;
    } else {
        selectOption.classList.remove('error');
        errorSelect.classList.remove('error-select')
        errorSelect.textContent = '';
        isSelect = true;
    }
}

selectOption.addEventListener('blur', validateSelect);

inputAll.forEach(input => {
    input.addEventListener('input', () => {
        const errorField = document.getElementById(`error-${input.id.split('-')[1]}`);
        if (errorField) errorField.textContent = '';
    })
})

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    validateName();
    validatePhone();
    validateEmail();
    validateSelect();

    if (isName && isPhone && isEmail && isSelect) {
        const userData = `
            Имя: ${inputName.value.trim()}
            Телефон: ${inputPhone.value.trim()}
            Email: ${inputEmail.value.trim()}
            Выбранная услуга: ${selectOption.value.trim()}
            Пожелания: ${userText.value.trim()}
        `;
        alert(`Форма успешно отправлена:\n${userData}`);
    } else {
        alert('Пожалуйста, заполните все поля корректно.');
    }
})

