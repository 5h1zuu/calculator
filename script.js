let num1 = []
let answer = []
let total = []
let value = 0
let choice = ""
let operation = ""

const result = document.querySelector('.total')
const clearBtn = document.querySelector('.clear')
const removeBtn = document.querySelector('.delete')
const numberBtn = document.querySelectorAll("#num")
const operator = document.querySelectorAll("#operator")
const decimal = document.querySelector("#decimal")

numberBtn.forEach(button =>{
    button.addEventListener('click' , () =>{
        let value = button.getAttribute('value')
        num1.push(value)
        result.textContent = num1.join("")
    })
})

operator.forEach(button =>{
    button.addEventListener('click', () =>{
        let choice = button.getAttribute('value')
        if (choice == "add"){
            addition()
        }else if (choice == "subtract"){
            subtraction()
        }else if (choice == "multiply"){
            multiplication()
        }else if (choice == "divide"){
            division()
        }else if (choice == "equal"){
            equal()
        }
    })
})

decimal.addEventListener('click', () =>{
    checkDecimal()
    num1.push(".")
    result.textContent = num1.join("")
    //only 1 decimal allowed if statement here
})

clearBtn.addEventListener('click', () =>{
    result.textContent = 0
    total = []
    num1 = []
    answer = []
    choice = ""
})

removeBtn.addEventListener('click', () =>{
    num1.pop()
    result.textContent = num1.join("")
})

function checkDecimal(){
    if(num1.includes(".")){
        num1.pop()
    }
}

function checkNumber(){
    if (typeof answer == 'number'){
        total = answer;
    }else{
        getNumberLength()
        total = parseFloat(num1.join(""))        
    }
    num1 = []
}

function noEqual(){
    if (num1.length === 0){
        result.textContent = "ERROR RETRY"
        total = []
        num1 = []
        answer = []
        choice = ""
    }
}

function getNumberLength(){
    if(num1.length > 16){
        result.textContent = "TOO BIG OF A NUMBER"
        total = []
        num1 = []
        answer = []
        choice = ""
    }
}

function addition(){
    checkNumber()
    operation = "add"
}

function subtraction(){
    checkNumber()
    operation = "subtract"
}

function multiplication(){
    checkNumber()
    operation = "multiply"
}

function division(){
    checkNumber()
    operation = "divide"
}

function equal(){
    if (operation == "add"){
        answer = total + parseFloat(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
        getNumberLength()
        noEqual()
        
    }
    else if (operation == "subtract"){
        answer = total - parseFloat(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
        getNumberLength()
        noEqual()
    }
    else if (operation == "multiply"){
        answer = total * parseFloat(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
        getNumberLength()
        noEqual()
    }
    else if (operation == "divide"){
        answer = total / parseFloat(num1.join(""))
        if (answer == "Infinity" || isNaN(answer)){
            result.textContent = "Error cannot perform that action"
                total = []
                num1 = []
                answer = []
                choice = ""
            }else{
                answer = parseFloat([answer.toFixed(10)])
                result.textContent = answer
                getNumberLength()
                noEqual()
        } 
    }
}



