console.log("Hi guys")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const divMessage = document.querySelector('#welcome')

const p = document.createElement('p')
divMessage.append(p)

if(isMorning == true){
    
    p.innerHTML = `<p>Good Morning</p>`
}
else if(isAfternoon == true){
    
    p.innerHTML = `<p>Good Afternoon</p>`
}
else{
    
    p.innerHTML = `<p>Good Evening</p>`
}

localStorage.setItem(`It's a secret to everybody.`, `It's not a secret anymore.`)