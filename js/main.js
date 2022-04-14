const menuBtn = document.querySelector('.menu')
const navClass = document.querySelector('.nav')
const cancelBtn = document.querySelector('.cancel')
const navigation = document.querySelector('.nav');
const body = document.querySelector('body');





menuBtn.addEventListener('click', function() {
    navClass.style.transform = "translate(0%)";
    menuBtn.style.display = "none";
})



cancelBtn.addEventListener('click', function() {
    navClass.style.transform = "translate(-100%)"
    menuBtn.style.display = "unset"


})