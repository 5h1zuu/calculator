let total = []
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
        total.push(value)
        result.textContent = total.join("")
    })
})


operator.forEach(button =>{
    button.addEventListener('click', () =>{
        let choice = button.getAttribute('value')
        console.log(choice)
    })
})





function addition(){

    
}

function subtraction(){

}

function multiplication(){

    
}

function division(){

    
}


function operate(){
    if (choice == "add"){
        console.log("addition")
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



