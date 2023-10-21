const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const inputEmailRegister = document.querySelector('.email-signup');
const inputPasswordRegister = document.querySelector('.password-signup');
const btnSignup = document.getElementById('signup-btn');
let popupSignup = document.getElementById('popup-signup');

btnSignup.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        inputEmailRegister.value === "" ||
        inputPasswordRegister.value === ""
    ) {
        alert("Please fill your register !!!");
    }
    else {
        const user= {
            email : inputEmailRegister.value,
            password : inputPasswordRegister.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(inputEmailRegister.value, json);
        alert("Successfully registered")
    };
});


const inputEmail = document.querySelector('.email-login');
const inputPassword = document.querySelector('.password-login');
const btnLogin = document.getElementById('login-btn');
let popupLogin = document.getElementById('popup-login');

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputEmail.value === "" || inputPassword.value == "") {
        alert("Please fill your signin");
    } else {
        const user = JSON.parse(localStorage.getItem(inputEmailRegister.value));
        if (
            user.email === inputEmail.value &&
            user.password === inputPassword.value
        ) {
            alert("Success")
            window.location.href = './index1.html';
        } else {
            alert = "LOGIN FAILED"
        }
    }
});

