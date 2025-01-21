class Crud{
    constructor(){
        this.btnIncludes = document.querySelector('[data-btn="buttonIncludes"]')
        this.dialogModal = document.querySelector('.dialog')
        this.tbody = document.querySelector('.tbody')
        this.dialogModalEdit = document.querySelector('.dialogEdit')

        this.onIncludes()
        this.createUser()
    }

    onIncludes(){
        const inputUser = document.querySelectorAll('[data-input]')
        this.btnIncludes.addEventListener('click', e =>{

            inputUser.forEach((input)=>{
                input.value = ''
            })
            this.dialogModal.showModal()
            
        })
    }

    validationUserEdit(){
        const inputNameEdit = document.querySelector('[data-inputEdit="nameEdit"]').value
        const inputFunctionEdit = document.querySelector('[data-inputEdit="functionEdit"]').value
        const inputWageEdit = document.querySelector('[data-inputEdit="wageEdit"]').value
        if(inputNameEdit === '' || inputFunctionEdit === '' || inputWageEdit === ''){
            alert('Preencha todos os campos')
            return false
        }
        return true
    }

    validationUser(){
        const inputName = document.querySelector('[data-input="name"]').value
        const inputFunction = document.querySelector('[data-input="function"]').value
        const inputWage = document.querySelector('[data-input="wage"]').value

        if(inputName === '' || inputFunction === '' || inputWage === ''){
            alert('Preencha todos os campos')
            return false
        }
        return true
        
    }

    createUser(){
        const inputUser = this.dialogModal.querySelectorAll('[data-input]')
        const btnSave = document.querySelector('.btnSave').addEventListener('click',e=>{
            const userData = {}
            inputUser.forEach((data)=>{
                userData[data.dataset.input] = data.value
                
            })

            if(!this.validationUser()) return
            this.addLine(userData)
            this.dialogModal.close()
            
        })
                
    }

    addLine(userData){
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.function}</td>
            <td>${userData.wage}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="cursor: pointer;" class="bi bi-pencil-square btnEdit" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>      
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  style="cursor: pointer;" class="bi bi-trash btnDelete" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </td>

        `
        const exclused = tr.querySelectorAll('.btnDelete')
        const Edit = tr.querySelectorAll('.btnEdit')
        this.tbody.appendChild(tr)
        this.btnEdit(Edit, tr)
        this.btnDelete(exclused, tr)
    }

    btnEdit(Edit,tr){
        const btnSaveEdit = document.querySelector('.btnSaveEdit')
        const inputUserEdit = this.dialogModalEdit.querySelectorAll('[data-inputEdit]')
        const trEdit = tr.querySelectorAll('td')

        const userData = {}
        const trLine = {
            firstName : trEdit[0],
            firstFunction : trEdit[1],
            firstWage : trEdit[2]
            
        }
        
        Edit.forEach((btn)=>{

            btn.addEventListener('click', e =>{
                this.dialogModalEdit.showModal()

                btnSaveEdit.addEventListener('click', e =>{

                    inputUserEdit.forEach((data)=>{    
                        userData[data.dataset.inputedit] = data.value
                        
                    })
                    
                    if(!this.validationUserEdit()) return

                    trLine.firstName.innerHTML = userData.nameEdit
                    trLine.firstFunction.innerHTML = userData.functionEdit
                    trLine.firstWage.innerHTML = userData.wageEdit

                    this.dialogModalEdit.close()
                })
                
                
            })

            inputUserEdit.forEach((data)=>{ 
                if(data.name === 'name'){
                    data.value = trLine.firstName.textContent
                }

                else if(data.name === 'function'){
                    data.value = trLine.firstFunction.textContent
                }

                else if(data.name === 'wage'){
                    data.value = trLine.firstWage.textContent
                }
                
            })
            
       })
    }

    btnDelete(exclused,tr){
        exclused.forEach((btn)=>{
            btn.addEventListener('click', e =>{
                tr.remove()
            })
        })
    }
}

let crud = new Crud()