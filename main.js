let cambiaTesto = document.querySelector("#cambiaTesto");
let cambiaTestoBtn = document.querySelector("#cambiaTestoBtn");

function cambiaTestoParagrafo(){
    cambiaTestoBtn.addEventListener("click", () => {
        cambiaTesto.innerHTML = `Jealousy, Jealousy`;
    })
}

cambiaTestoParagrafo();


