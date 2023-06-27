var buttons=document.querySelectorAll("button");

console.log;
buttons.forEach(button =>{
    button.addEventListener("click",drumfun)
})

function drumfun(){
    var buttText=this.innerHTML;
    makesound(buttText);
    }


document.addEventListener("keypress",function(event){
    makesound(event.key);

})

function makesound(key){
    switch (key) {
        case 'w':
            var tom1= new Audio("drumsounds/tom-1.mp3")
            tom1.play();
            break;
        case 'a':
            var tom2= new Audio("drumsounds/tom-2.mp3")
            tom2.play();
            break;
        case 's':
            var tom3= new Audio("drumsounds/tom-3.mp3")
            tom3.play();
            break;
        case 'd':
            var tom4= new Audio("drumsounds/tom-4.mp3")
            tom4.play();
            break;
        case 'j':
            var crash= new Audio("drumsounds/snare.mp3")
            crash.play();
            break;
        case 'k':
            var snare= new Audio("drumsounds/crash.mp3")
            snare.play();
            break;
        case 'l':
            var kick= new Audio("drumsounds/kick-bass.mp3")
            kick.play();
            break;
}
}


