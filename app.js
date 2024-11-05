
 var input = document.getElementById('inp')
 var parent = document.getElementById('parent')
 console.log(parent, input)
 input.setAttribute("class","input")
 input.className += " form-control w-100"
 function addTodo(){
       console.log(input.value)
   if(input.value == ""){
    alert("fields are required")
    return
   }
if(!input.value){
    alert('required field are missing')
    return
}
    // create li element
   var li = document.createElement('li')
   //create li text
  var liTxt = document.createTextNode(input.value)
  //set class li
   li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center border border-success border border-4 border border-top-0 border border-end-0 border border-start-0 fst-italic text-uppercase')
    // relation li parent to li text
   li.appendChild(liTxt)
   var div = document.createElement('div')
    div.setAttribute('class', 'd-flex gap-4')
    //create edit button
    var editBtn = document.createElement('button')
   //create edit button text
    var editBtnTxt = document.createTextNode('Edit Todo')
    editBtn.setAttribute('class', "btn btn-success fst-italic")
    editBtn.setAttribute('onclick', "editTodo(this)")
    editBtn.appendChild(editBtnTxt)
    div.appendChild(editBtn)
   var delBtn = document.createElement('button')
   var delBtnTxt = document.createTextNode("Delete todo")
   delBtn.setAttribute('class', 'btn btn-danger fst-italic')
   delBtn.setAttribute('onclick', "deleteTodo(this)")
    delBtn.appendChild(delBtnTxt)
    div.appendChild(delBtn)
  
   li.appendChild(div)
   parent.appendChild(li)
   input.value = ""
   console.log(parent)
}
 function deleteAll(){
     parent.remove()
}
 function deleteTodo(ele){
    var liRem = ele.parentNode.parentNode
    console.log(liRem)

    liRem.remove()
 }
 function editTodo(ele){
    var liValue = ele.parentNode.parentNode.firstChild.nodeValue
    console.log(liValue)
    console.log('run')
     console.log('edit')
    var editValue = prompt('Enter New Value', liValue)
console.log(editValue)
    console.log(ele.parentNode.parentNode.firstChild.nodeValue)
     ele.parentNode.parentNode.firstChild.nodeValue = editValue
}
