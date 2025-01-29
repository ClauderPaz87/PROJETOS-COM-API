document.addEventListener("DOMContentLoaded", () => {
class login{
    constructor(){
        this.buttonSignUp = document.querySelector('.btnSignUp')
        this.buttonSignIn = document.querySelector('.btnSignIn')
        this.loginContainer = document.querySelector('.loginContainer')
        this.registerContainer = document.querySelector('.registerContainer')
        this.dialogContainer = document.querySelector('.dialogUser')

        this.buttonUp()
        this.buttonIn()
        this.SignIn()
        this.SignUp()
        this.btnClose()
    }

    includesInputRegister(){
        const inputName = document.querySelector('[data-inputRegister="inputName"]').value.trim();
        const inputEmail = document.querySelector('[data-inputRegister="inputEmail"]').value.trim();
        
        const tdNames = document.querySelectorAll('.tdName');
        const tdEmails = document.querySelectorAll('.tdEmail');
    
        for (let td of tdNames) {
            if (td.textContent.trim() === inputName) {
                alert('Nome já cadastrado!');
                return false;
            }
        }
    
        // Verifica se o email já existe
        for (let td of tdEmails) {
            if (td.textContent.trim() === inputEmail) {
                alert('Email já cadastrado!');
                return false;
            }
        }
    
        return true;
    }

    includesInputLogin(){
        const inputPassword = document.querySelector('[data-inputLogin="inputPasswordLogin"]').value.trim();
        const inputEmail = document.querySelector('[data-inputLogin="inputEmailLogin"]').value.trim();
        
        const tdPassword = document.querySelectorAll('.tdPasswordLogin');
        const tdEmails = document.querySelectorAll('.tdEmailLogin');
    
        for (let td of tdPassword) {
            if (td.textContent.trim() === inputPassword) {
                alert('Senha já cadastrado!');
                return false;
            }
        }
    
        for (let td of tdEmails) {
            if (td.textContent.trim() === inputEmail) {
                alert('Email já cadastrado!');
                return false;
            }
        }
    
        return true;
    }

    validateInputsRegister(){
        const inputName = document.querySelector('[data-inputRegister="inputName"]').value
        const inputEmail = document.querySelector('[data-inputRegister="inputEmail"]').value
        const inputPassword = document.querySelector('[data-inputRegister="inputPassword"]').value

        if(inputName === '' || inputEmail === ''){
            alert('Preencha todos os campos')
            return false
        }
        return true
    }

    validateInputsLogin(){
        const inputEmail = document.querySelector('[data-inputLogin="inputEmailLogin"]').value
        const inputPassword = document.querySelector('[data-inputLogin="inputPasswordLogin"]').value

        if(inputPassword === '' || inputEmail === ''){
            alert('Preencha todos os campos')
            return false
        }
        return true
    }

    buttonIn(){
        const inputs = document.querySelectorAll('[data-inputLogin]')
        this.buttonSignIn.addEventListener('click', (e)=>{

            let jsonInputLogin = {}

            inputs.forEach((input)=>{
                 jsonInputLogin = {
                    ...jsonInputLogin,
                    [input.dataset.inputlogin] : input.value
                }
            })
            if(!this.validateInputsLogin()) return
            if(!this.includesInputLogin()) return
            this.trLineIn(jsonInputLogin)
            this.dialogContainer.style.display = 'flex'
        })
    }

    buttonUp(){ 
        const inputs = document.querySelectorAll('[data-inputRegister]')
        this.buttonSignUp.addEventListener('click', e=>{

            let jsonInput = {}
            inputs.forEach((input)=>{
                jsonInput = {
                    ...jsonInput,
                    [input.dataset.inputregister] : input.value
               }
            
            })

            if(!this.validateInputsRegister()) return
            if(!this.includesInputRegister()) return
            this.trLineUp(jsonInput)
            this.dialogContainer.style.display = 'flex'    
        })
    }

    trLineUp(jsonInput){
        const tbody = document.querySelector('.tbodyRegister')

        const tr = document.createElement('tr')
            tr.innerHTML = `
                <td class="tdName">${jsonInput.inputName}</td>
                <td class="tdEmail">${jsonInput.inputEmail}</td>
            
            `
            tbody.appendChild(tr)
    }

    trLineIn(jsonInputLogin){
        const tbody = document.querySelector('.tbodyLogin')

        const tr = document.createElement('tr')
            tr.innerHTML = `
                <td class="tdEmailLogin">${jsonInputLogin.inputEmailLogin}</td>
                <td class="tdPasswordLogin">${jsonInputLogin.inputPasswordLogin}</td>
            
            `
            tbody.appendChild(tr)
    }

    SignIn(){
        const buttonSignIn = document.querySelector('.SignIn').addEventListener('click', (e)=>{
            this.loginContainer.style.display = 'none'
            this.registerContainer.style.display = 'flex'
        })
            
    }

    SignUp(){
        const buttonSignIn = document.querySelector('.SignUp').addEventListener('click', (e)=>{
            this.loginContainer.style.display = 'flex'
            this.registerContainer.style.display = 'none'
        } )
    }

    btnClose(){
        const btnClose = document.querySelector('.btnClose').addEventListener('click', (e)=>{
            this.dialogContainer.style.display = 'none'
        })
    }
}

let Login = new login()
})