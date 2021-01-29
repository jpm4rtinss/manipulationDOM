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

    input.value = ''
}

const doneButtonFunc = ()=>{
    const doneButton = document.createElement('button')
    doneButton.classList.add('check')
    doneButton.innerText = 'Concluido'
    doneButton.addEventListener('click', ()=> {
        console.log('fui clicado')
    })

    return doneButton
}


const buttonNewTask = document.querySelector('[data-form-button]')

buttonNewTask.addEventListener('click', createTaskFunc)
    
    

