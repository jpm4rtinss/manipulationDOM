const doneButtonFunc = ()=>{
    const doneButton = document.createElement('button')
    doneButton.classList.add('check-button')
    doneButton.innerText = 'Concluido'
    doneButton.addEventListener('click', doneTaskFunc)

    return doneButton
}

const doneTaskFunc = (event)=>{
    const doneButton = event.target 
    const taskCompleted = doneButton.parentElement

    taskCompleted.classList.toggle('done')
}

export default doneButtonFunc