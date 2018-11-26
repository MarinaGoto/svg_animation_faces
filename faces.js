var btns = document.querySelectorAll(" .buttons button");
var faces = document.getElementsByClassName("faces")[0];

for(i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", manageFaceClasses);
}

function manageFaceClasses(){
    if(this.getAttribute("data-add")){
        faces.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove")){
        faces.classList.remove(this.getAttribute("data-remove"));
    }
}

