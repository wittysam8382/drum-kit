var numberOfbuttons=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfbuttons; i++){
    //detection button press
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
        //What to do when clicked is detected
    })

    //detecting keyboard press
    document.addEventListener("keypress" , function(event){
            makeSound(event.key);
            buttonAnimation(event.key);
    });


    
    
    function makeSound(key){
        switch(key){
            case "w":
            var audio = new Audio("audio/crash.mp3");
            audio.play();
            case "a":
            var audio = new Audio("audio/kick-bass.mp3");
            audio.play();
            case "s":
            var audio = new Audio("audio/snare.mp3");
            audio.play();
            case "d":
            var audio = new Audio("audio/tom-1.mp3");
            audio.play();
            case "j":
            var audio = new Audio("audio/tom-2.mp3");
            audio.play();
            case "k":
            var audio = new Audio("audio/tom-3.mp3");
            audio.play();
            case "l":
            var audio = new Audio("audio/tom-4.mp3");
            audio.play();
            default:
                console.log(innerHTML);
        }
    }

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+ currentKey); 
        console.log(activeButton); 
        activeButton.classList.add("pressed"); 
        
    }

}

