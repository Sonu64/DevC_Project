const hidddenElement = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    }
    
    )
});
hidddenElement.forEach((el) => observer.observe(el));

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const content = document.querySelector('.content');

const navbar = document.querySelector('.navbar');
const closeNav = document.querySelector('.closeNav');
const openNav = document.querySelector('.copenNav');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    content.classList.add('deactive');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    content.classList.remove('deactive');
});


closeNav.addEventListener('click',()=>{
navbar.classList.add('shiftRight');

});
openNav.addEventListener('click',()=>{
    navbar.classList.remove('unShiftRight');
    
    });







function auth(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email == "admin@gmail.com" && password == "123"){
        window.location.assign("login.html");
        alert("Login Successfull");
    }
    else{
        alert("Invalid Information");
    }
}