let bill = document.getElementById(quantity);
let smallest = document.getElementsByClassName("btn-1");
let small = document.getElementsByClassName("btn-2");
let medium = document.getElementsByClassName("btn-3");
let higher = document.getElementsByClassName("btn-4");
let highest = document.getElementsByClassName("btn-5");
let custom = document.getElementsByClassName("custom");
let reset = document.getElementsByClassName("reset");


let functionFirst = (quantity) => {
    smallest.addEventListener('click', () => {
return(quantity*0,05)
    })

}
let functionSecond = (quantity) => {
    small.addEventListener('click', () => {
        return(quantity*0,15)
    })
}
let functionThird = (quantity) => {
    medium.addEventListener('click', () => {
        return(guantity*0,5)
    })
}
let functionFourth = (quantity) => {
    higher.addEventListener('click', ()=> {
        return(quantity*0,1)
    })
}
let functionFifth = (quantity) => {
    highest.addEventListener('click', () =>{
        return(quantity*0,25)
    })

}
let functionSixth = (quantity) => {
    custom.addEventListener('click',() => {
        return("")
    })
}
let functionSeventh = (quantity) => {
    reset.addEventListener('click',() =>{
        return("")
    })
}