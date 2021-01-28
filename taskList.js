const createTaskFunc = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const inputValue = input.value
    console.log(inputValue)
    input.value = ''
}




const buttonNewTask = document.querySelector('[data-form-button]')

buttonNewTask.addEventListener('click', createTaskFunc)
    
    