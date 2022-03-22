
let myform=document.getElementById("myform")
let myinput=document.getElementById("myinput")
let mylist=document.getElementById("mylist")

myform.addEventListener("submit", 
         (data) =>{
  data.preventDefault()
 createItem(myinput.value) })


  createItem = (d) => {
      let mytemplate = `<li> ${d} <button onclick="deleteItem(this)">Delete</button></li>`
      mylist.insertAdjacentHTML("beforeend",mytemplate)
      myinput.value=""
    myinput.focus()
  }
  
  function deleteItem(x){
    x.parentElement.remove()
    
  }