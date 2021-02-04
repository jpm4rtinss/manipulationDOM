import deleteButtonFunc from './components/deleteTask.js'
import doneButtonFunc from './components/doneTask.js'

    const createTaskFunc = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const inputValue = input.value
    
    const listElement = document.querySelector('[data-list]')
    const taskElement = document.createElement('li')
    const taskElementContent = `<p class='content'>${inputValue}</p>`
    taskElement.innerHTML = taskElementContent
    taskElement.classList.add('task')
    listElement.appendChild(taskElement)

    taskElement.appendChild(doneButtonFunc())
    taskElement.appendChild(deleteButtonFunc())

    input.value = ''
}


const buttonNewTask = document.querySelector('[data-form-button]')

buttonNewTask.addEventListener('click', createTaskFunc)




    

