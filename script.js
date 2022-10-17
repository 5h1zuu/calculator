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

clearBtn.addEventListener('click', () =>{
    result.textContent = 0
    total = []
    num1 = []
    answer = []
    choice = ""
})

//fix this button to remove number
removeBtn.addEventListener('click', () =>{
    num1.pop()
    result.textContent = num1.join("")
})

function checkNumber(){
    if (typeof answer == 'number'){
        total = answer;
    }else{
        total = parseInt(num1.join(""))
    }
    num1 = []
}

//check if there is second number. function within the equal button
function noEqual(){
    if (num1 == []){
        result.textContent = "Error forgot second number"
    }else{
        result.textContent = answer
    }
}

//Function needed to stop overflow with input, while loop


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
        answer = total + parseInt(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
        
    }
    else if (operation == "subtract"){
        answer = total - parseInt(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
    }
    else if (operation == "multiply"){
        answer = total * parseInt(num1.join(""))
        answer = parseFloat([answer.toFixed(10)])
        result.textContent = answer
    }
    else if (operation == "divide"){
        answer = total / parseInt(num1.join(""))
        if (answer == "Infinity"){
            result.textContent = "Error cannot perform that action"
                total = []
                num1 = []
                answer = []
                choice = ""
            }else{
                answer = parseFloat([answer.toFixed(10)])
                result.textContent = answer
        } 
    }
}



