//import Toastify from 'toastify-js'
btn = document.querySelector('#toaster');

function toastIt(){
    Toastify({
        text: "This is a toast",
        duration: 3000}).showToast();
}
btn.addEventListener('click',toastIt);x``