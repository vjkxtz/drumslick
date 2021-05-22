
document.addEventListener("keydown",function(event){
    buttonclicked(event.key);
    animation(event.key);
})

for(var i=0;i<=(document.querySelectorAll('.drum').length); i++){
    document.querySelectorAll("button")[i].addEventListener('click',function() {
        var innerhtml = this.innerHTML;
        buttonclicked(innerhtml);
        animation(innerhtml);
    });
}


function buttonclicked(innerhtml){
    var innerhtml;
    switch(innerhtml){
        case "w":
            audioplay('crash');
        break;
        case "a":
            audioplay('kick-bass');
        break;
        case "s":
            audioplay('snare');
        break;
        case "d":
            audioplay('tom-1');
        break;
        case "j":
            audioplay('tom-2');
        break;
        case "k":
            audioplay('tom-3');
        break;
        case "l":
            audioplay('tom-4');

    }
}

function audioplay(filename){
    var filename;
    var audio = new Audio('sounds/'+filename+'.mp3');
    audio.play();
}

function animation(innerhtml){
    var activebutton = document.querySelector("."+ innerhtml);
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    })
}