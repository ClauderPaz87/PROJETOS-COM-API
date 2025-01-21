class IMC{
    constructor(){
        this.btnCalc = document.querySelector('.btnCalculate')
        this.imcCalculated = document.querySelector('.IMC')
        this.inputsIMC = document.querySelectorAll('[data-input]')

        this.btnCalculate()
    }

    btnCalculate(){
        this.btnCalc.addEventListener('click', e=>{
            this.calculatedIMC()
            
        })

    }

    viewIMC(calc){
    
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="row mt-4">
                <div class="col-5">
                    <p>${calc}</p>
                    <p style="font-size: small;">Seu IMC</p>
                </div>

                <div class="col-5 d-flex align-items-center me-2 test">
                    <p class="result"></p>
                </div>
            </div>
        `
        this.imcCalculated.appendChild(div)
        this.resultIMC(calc)

    }

    calculatedIMC(){
        let weight = 0
        let height = 0

        this.inputsIMC.forEach((input)=>{
            if(input.dataset.input === 'inputWeight'){
                weight = parseFloat(input.value)
            }

            else if(input.dataset.input === 'inputHeight'){
                height = parseFloat(input.value)
            }

            
            
            
        })
        const calc = parseFloat(weight / (height * height)) 
        this.viewIMC(calc.toFixed(2))
        this.resultIMC(calc.toFixed(2))
    }

    resultIMC(calc){
        const p = document.querySelector('.result')
        const resultImc = {
            below : "Abaixo do normal",
            normal : "Normal",
            overweight : "Sobrepeso",
            gradeobesityI : "Obesidade grau 1",
            gradeobesityII : "Obesidade grau 2",
            gradeobesityIII : "Obesidade grau 3"

        }
        if(calc < 18.5){
            p.innerHTML =  resultImc.below
        }

        else if(calc > 18.6 && calc < 24.9){
            p.innerHTML =  resultImc.normal
        }

        else if(calc > 25 && calc < 29.9){
            p.innerHTML =  resultImc.overweight
        }

        else if(calc > 30 && calc < 34.9){
            p.innerHTML =  resultImc.gradeobesityI
        }

        else if(calc > 35 && calc < 39.9){
            p.innerHTML =  resultImc.gradeobesityII
        }

        else if(calc > 40){
            p.innerHTML =  resultImc.gradeobesityIII
        }
    }
    
}

let imc = new IMC()