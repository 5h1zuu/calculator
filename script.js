let num1 = []
let answer = []
let total = []
let value = 0
let choice = ""
let operation = ""
let point = 0

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
    num1.push(".")
    checkDecimal()
    result.textContent = num1.join("")
    point = 1
})

clearBtn.addEventListener('click', () =>{
    result.textContent = 0
    total = []
    num1 = []
    answer = []
    choice = ""
    point = 0
})

removeBtn.addEventListener('click', () =>{
    num1.pop()
    point = 0
    result.textContent = num1.join("")
})

function checkDecimal(){
    if(point > 0){
        console.log("more than 1 decimal point")    
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
    point = 0
}

function noEqual(){
    if (num1.length === 0){
        result.textContent = "ERROR RETRY"
        total = []
        num1 = []
        answer = []
        choice = ""
        point = 0
    }
}

function getNumberLength(){
    if(num1.length > 16){
        result.textContent = "TOO BIG OF A NUMBER"
        total = []
        num1 = []
        answer = []
        choice = ""
        point = 0
    }
}


//change logic later to automatically calculate the answer within the function instead of doing it when the equal button is pressed



function addition(){
    checkNumber()
    operation = "add"
    point = 0
}

function subtraction(){
    checkNumber()
    operation = "subtract"
    point = 0
}

function multiplication(){
    checkNumber()
    operation = "multiply"
    point = 0
}

function division(){
    checkNumber()
    operation = "divide"
    point = 0
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



