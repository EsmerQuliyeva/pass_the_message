let submitBtn=document.querySelector("#submit_btn")
let messageInput=document.getElementById("message-input")
let messageOutput=document.getElementById("message-output")
submitBtn.addEventListener("click", function (){
messageOutput.innerHTML=messageInput.value
messageInput.value=""
})
messageInput.addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        messageOutput.innerHTML=messageInput.value
        messageInput.value=""
    }
   
})