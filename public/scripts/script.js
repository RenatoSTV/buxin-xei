// const options = document.querySelectorAll('li')

// for( option of options){
//     option.addEventListener("mouseover", function(){
//         const 
//         option.getElementsByTagName('span').removeAttribute('hidden', true)
//     })
// }

const spans = document.querySelectorAll('span');
const options = document.querySelectorAll('li');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseover', function () {
        options[i].classList.add('active')
        spans[i].removeAttribute('hidden', true)

    })
}

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseleave', function () {
        options[i].classList.remove('active')
        spans[i].setAttribute('hidden', true)

    })
}