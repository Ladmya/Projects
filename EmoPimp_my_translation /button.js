// CLEAR BUTTON FUNCTION

var input = document.querySelector('#clear');
var textarea = document.querySelector('.text');
var emoClear = document.querySelector('.emojis');

input.addEventListener('click', function () {
    textarea.value = '';
    emoClear.innerHTML = '';
}, false);


