
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
    
    var buttonInner = this.innerHTML;

    buttonInnerhtml(buttonInner);

    addAnimation(buttonInner);
});}

document.addEventListener("keypress", function(event){
    
       var buttonInner = event.key;

    buttonInnerhtml(buttonInner);
    addAnimation(buttonInner);


});

function buttonInnerhtml(key){

    switch (key) {
        case "w":
            var w=new Audio("tom-1.mp3");
            w.play();
        break;

        case "a":
            var a=new Audio('tom-2.mp3');
            a.play();
        break;

        case "s":
            new Audio("tom-3.mp3").play();
        break;

        case "d":
            new Audio("tom-4.mp3").play();
        break;
        
        case "j":            
            new Audio("snare.mp3").play();
        break;

        case "k":
            new Audio("crash.mp3").play();
        break;

        case "l":
            new Audio("kick-bass.mp3").play();
        break;
        
        default:alert(key);
    }      
}


function addAnimation(currentKey){

    var animation = document.querySelector("." + currentKey);
    animation.classList.add("pressed");

    setTimeout( () => {
        animation.classList.remove("pressed");
    }, 100);

}
