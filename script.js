let total = 0
let value = 0
let choice = ""

const result = document.querySelector('.total')
const clear = document.querySelector('.clear')
const remove = document.querySelector('.delete')
const numberBtn = document.querySelectorAll("#num")
const operator = document.querySelectorAll("#operator")


numberBtn.forEach(button =>{
    button.addEventListener('click' , () =>{
        let value = button.getAttribute('value')
        result.textContent = value
        
    })
})

operator.forEach(button =>{
    button.addEventListener('click', () =>{
        let choice = button.getAttribute('value')
        console.log(choice)
    })
})





function addition(){
    total = value + value
    console.log(total)
    return total
    
}

function subtraction(){
    total = value - value
    return total
    
}

function multiplication(){
    total = value * value
    return total
    
}

function division(){
    total = value / value
    return total
    
}


function operate(){
    if (choice == "add"){
        addition()
    }
    else if(choice == "subtract"){
        subtraction()
    }
    else if(choice == "multiply"){
        multiplication()
    }
    else if(choice == "divide"){
        division()
    }
    return total
}




