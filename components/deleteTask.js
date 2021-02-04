const deleteButtonFunc = ()=>{
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Deletar'
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener('click', deleteTask)
    return deleteButton
    

}


const deleteTask = (event)=>{
    const deleteButton = event.target
    const taskLi= deleteButton.parentElement
    taskLi.remove()
}

export default deleteButtonFunc