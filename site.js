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

//localStorage.setItem(`It's a secret to everybody.`, `It's not a secret anymore.`)

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage += 1
    showImages()
}, 5000)

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

next.addEventListener('click', () => {
    currentImage += 1
    showImages()
})
prev.addEventListener('click', () => {
    currentImage -= 1
    showImages()
})


//To Do List
//initialize input data and todoList
const input = document.querySelector('#new-todo')
const todoList = document.querySelector('.todo-list')

//retrieve local data
const todos = JSON.parse(localStorage.getItem('todo-list')) || []


//render to do list
const renderTodos = () => {
    todoList.innerHTML = ''

    todos.forEach(todo => { 
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li) 
    })
    
}

//render to do list on page load
document.addEventListener('DOMContentLoaded', function(){
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()
})

//push data to array, add to local storage, render todos all in one button click
const button = document.querySelector('#AddToDo')
button.addEventListener('click',() => todos.push({ text: input.value, completed: false }))
button.addEventListener('click',() => localStorage.setItem('todo-list', JSON.stringify(todos)))
button.addEventListener('click',() => renderTodos())