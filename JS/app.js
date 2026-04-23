const iconsElem = document.querySelectorAll('.frequently-questions__item-icon')
const replyElem = document.querySelector('.frequently-questions__item-reply')
const minusIcon = document.querySelector('#minus-icon')
const plusIcon = document.querySelector('#plus-icon')
const boxItems = document.querySelectorAll('.frequently-questions__item')
let isMinusIcon = false;

iconsElem.forEach(icon => {
    icon.addEventListener('click', () => {
        boxItems.forEach(item=>{
            item.style.border='1px solid #ebebeb'
        })
        icon.parentElement.style.border='1px solid #0f4c3a';
        if (isMinusIcon) {
            icon.previousElementSibling.lastElementChild.style.display = 'none';
            icon.lastElementChild.style.display = 'none';
            icon.firstElementChild.style.display = 'block';
            isMinusIcon = false;
        } else {
            icon.previousElementSibling.lastElementChild.style.display= 'block';
            icon.lastElementChild.style.display = 'block';
            icon.firstElementChild.style.display = 'none';
            isMinusIcon = true;
        }
    })
})