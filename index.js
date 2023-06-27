var buttons=document.querySelectorAll("button");
var box=document.querySelector(".box");



buttons.forEach(button => {
    button.addEventListener("click",Calculate);
})

  function Calculate(){
 var buttontext = this.innerText;
 if(buttontext==="AC"){
    box.value="";
    return;
 }
 if(buttontext==="C"){
    box.value=box.value.substr(0,box.value.length-1);
    return;
 }
 if(buttontext==="="){
    var result=box.value=eval(box.value);
    return(result);
}
 else{
    box.value += buttontext;
    return;
 }
}
 
