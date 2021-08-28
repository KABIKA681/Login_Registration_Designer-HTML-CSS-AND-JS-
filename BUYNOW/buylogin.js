
const inputs = document.querySelectorAll(".form_input")

function addfocus(){
    let.parent = this.parentNode.parentNode
    parent.classList.add("focus")
}
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}
/*=== to call all function ===*/
inputs.forEach(input =>{
   input.addEventListener("focus",addfocus)
   input.addEventListener("blur",remfocus) 
})