let num1 = []
let num2 = []
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
            console.log(total)
        }else if (choice == "subtract"){
            subtraction()
            console.log(total)
        }else if (choice == "multiply"){
            multiplication()
            console.log(total)
        }else if (choice == "divide"){
            division()
            console.log(total)
        }else if (choice == "equal"){
            equal()
            console.log(total)
        }
    })
})



clearBtn.addEventListener('click', () =>{
    result.textContent = 0
    total = []
    num1 = []
    num2 = []
    choice = ""
})

removeBtn.addEventListener('click', () =>{
    num1.pop()
    result.textContent = num1.join("")
 
})




function addition(){
    total = parseInt(num1.join(""))
    console.log(num1)
    console.log(total)
    num1 = []
    operation = "add"
    
}

function subtraction(){
    total = parseInt(num1.join(""))
    console.log(num1)
    console.log(total)
    num1 = []
    operation = "subtract"
}

function multiplication(){
    total = parseInt(num1.join(""))
    console.log(num1)
    console.log(total)
    num1 = []
    operation = "multiply"
    
}

function division(){
    total = parseInt(num1.join(""))
    console.log(num1)
    console.log(total)
    num1 = []
    operation = "divide"
    
}




function equal(){
    if (operation == "add"){
        total += parseInt(num1.join(""))
        result.textContent = total
    }
    else if (operation == "subtract"){
        total -= parseInt(num1.join(""))
        result.textContent = total
    }
    else if (operation == "multiply"){
        total *= parseInt(num1.join(""))
        result.textContent = total
    }
    else if (operation == "divide"){
        total /= parseInt(num1.join(""))
        result.textContent = total
    } 
}

//store value in a different variable and put value after equal in a different one as well?