let success = document.querySelector('#success')
let error = document.querySelector('#error')
let invalid = document.querySelector('#invalid')
let toastDiv = document.querySelector('.toastdiv')

let successmsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the Error!'
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!'

function showToast(msg) {
    let newdiv = document.createElement('div');
    newdiv.classList.add('new-div');
    newdiv.innerHTML = msg

    toastDiv.appendChild(newdiv);

    if (msg.includes('Error')) {
        newdiv.classList.add('error')
    }
    else if (msg.includes('Invalid')) {
        newdiv.classList.add('invalid')
    }

    setTimeout(() => {
        toastDiv.removeChild(newdiv)
    }, 5000);
}