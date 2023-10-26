let conpass = document.querySelector('#cpass')
let pass = document.querySelector('#password')
let passError = document.querySelector('#pass-error')

conpass.addEventListener('focusout', () => {
    if (conpass.value.trim() !== '') {
        if (conpass.value !== pass.value) {
            conpass.classList.add('invalid-input');
            conpass.setCustomValidity("Invalid field.");
            passError.textContent = 'password not match';
        }
        else{
            conpass.setCustomValidity("")
            passError.textContent = ''
        }
    }
    
})
conpass.addEventListener('focusin', () => {
    if (conpass.classList.contains('invalid-input')) {
        conpass.classList.remove('invalid-input');
    }
	})