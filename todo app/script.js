let itemsArray = []

function addItem(){
    const input = document.getElementById('input')
    const item = input.value
    const list = document.getElementById('list')
    const itemText = document.createTextNode(item)
    const li = document.createElement('li')
    const deleteBtn = document.createElement("button")

    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "delete-button"

    li.appendChild(itemText)
    li.appendChild(deleteBtn)
    list.appendChild(li)

    itemsArray.push(item)
    input.value = ""
    
    function deleteClickBtn(){
        const index = itemsArray.indexOf(item)
        itemsArray.splice(index, 1)
        li.parentNode.removeChild(li)
    }

    deleteBtn.addEventListener("click", deleteClickBtn);
}




