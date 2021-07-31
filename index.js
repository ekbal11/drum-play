
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
    
    buttonInnerhtml(this.innerHTML);
});}

document.addEventListener("keypress", function(event){
    
    buttonInnerhtml(event.key);

});

function buttonInnerhtml(key){

    switch (key) {
        case "w":
            var w=new Audio("sounds/tom-1.mp3");
            w.play();
        break;

        case "a":
            var a=new Audio('sounds/tom-2.mp3');
            a.play();
        break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
        break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
        break;
        
        case "j":            
            new Audio("sounds/snare.mp3").play();
        break;

        case "k":
            new Audio("sounds/crash.mp3").play();
        break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
        break;
        
        default:alert(key);
    }      
}