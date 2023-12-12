function getDate(){

    let date: Date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let dayNumber = date.getDay()
    let dateString:string = `${day}/${month}/${year}`
    let dayName = ''

    switch(dayNumber){
        case 1:
            dayName = 'Segunda-Feira'
            break;
        case 2:
            dayName = 'Terça-Feira'
            break;
        case 3:
            dayName = 'Quarta-Feira'
            break;
        case 4:
            dayName = 'Quinta-Feira'
            break;
        case 5:
            dayName = 'Sexta-Feira'
            break;
        case 6:
            dayName = 'Sábado'
            break;
        case 7:
            dayName = 'Domingo'
            break;
    }

    



    let dateArea = document.getElementById('date') as HTMLElement
    let h2 = document.createElement('h2')
    h2.innerText = dateString

    let span = document.createElement('span')
    span.innerText = dayName
    span.classList.add('span-decoration')

    dateArea.append(h2, span)
}

getDate()


let count = 0

let addTaskBtn = document.getElementById('newTaskBtn') as HTMLButtonElement
let addTaskInput = document.getElementById('newTaskInput') as HTMLInputElement

addTaskBtn.addEventListener('click', ()=>{

    if(addTaskInput.value.length === 0){
        alert('Por favor, insira alguma atividade válida!')
        return
    }

    count++
    let taskArea = document.getElementById('tasks-area') as HTMLElement
    let inputAreaText = document.getElementById('newTaskInput') as HTMLInputElement


    let div = document.createElement('div')
    div.id = `div-task${count}`
    div.classList.add('task')
    let input = document.createElement('input')
    input.type = 'checkbox'
    input.name = `task${count}`
    input.id = `task${count}`
    
    
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteBtn.id = 'deleteBtn'

    let label = document.createElement('label')
    label.setAttribute('for', `${input.id}`)
    label.innerText = inputAreaText.value

    div.append(input, label)
    taskArea.append(div, deleteBtn)

    addTaskInput.value = ''

    deleteBtn.addEventListener('click', ()=>{
        const elementToDelete = deleteBtn.previousElementSibling
        elementToDelete?.remove()
        deleteBtn.remove()
        count--
    })
})



addTaskInput.addEventListener('keyup', (event)=>{

    if(event.key === 'Enter'){

        if(addTaskInput.value.length === 0){
            alert('Por favor, insira alguma atividade válida!')
            return
        }else{
            count++
            let taskArea = document.getElementById('tasks-area') as HTMLElement
            let inputAreaText = document.getElementById('newTaskInput') as HTMLInputElement
        
        
            let div = document.createElement('div')
            div.id = `div-task${count}`
            div.classList.add('task')
            let input = document.createElement('input')
            input.type = 'checkbox'
            input.name = `task${count}`
            input.id = `task${count}`
            
            
            
            let label = document.createElement('label')
            label.setAttribute('for', `${input.id}`)
            label.innerText = inputAreaText.value


            let deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
            deleteBtn.id = 'deleteBtn'


            deleteBtn.addEventListener('click', ()=>{
                const elementToDelete = deleteBtn.previousElementSibling
                elementToDelete?.remove()
                deleteBtn.remove()
                count--
            })
        
            div.append(input, label)
            taskArea.append(div, deleteBtn)
            addTaskInput.value = ''
        }
        } 
})




