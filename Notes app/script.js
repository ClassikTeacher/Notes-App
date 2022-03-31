
const notes = JSON.parse(localStorage.getItem('notes'))
const btnAdd = document.querySelector('.btn-add')

if(notes){
    notes.forEach((note) => {
       addNote(note) 
    });
}

// const id = new Date().getTime().toString()

btnAdd.addEventListener('click', ()=>{
    addNote()
})

function addNote(text){
    
    const note = document.createElement('div')
    note.classList.add("container-notes")
    if(text){

    note.innerHTML = `
    <div class="notis"> 
        <div class="tools">
            <button class="btn-edit"><ion-icon name="create-outline"></ion-icon></button>
            <button class="btn-delete"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    <textarea disabled  name="note">${text}</textarea>
    </div>`
    } else {
        text = ''
        note.innerHTML = `
    <div class="notis"> 
        <div class="tools">
            <button class="btn-edit"><ion-icon name="create-outline"></ion-icon></button>
            <button class="btn-delete"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    <textarea name="note">${text}</textarea>
    </div>`
    }


    const btnDelete = note.querySelector('.btn-delete')
    const btnEdit = note.querySelector('.btn-edit') 

    const textarea = note.querySelector('textarea')

    // textarea.value = text

    btnEdit.addEventListener('click', ()=>{
       if(textarea.hasAttribute('disabled')){
        textarea.removeAttribute('disabled')
        } else { textarea.setAttribute('disabled','disabled');}
        
    })

    btnDelete.addEventListener('click', ()=>{
        note.remove()
        addLocalStorage()
    })

    textarea.addEventListener('input', ()=>{

        addLocalStorage()
    })
    
    document.body.querySelector('.container').appendChild(note)
}


function addLocalStorage() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}
