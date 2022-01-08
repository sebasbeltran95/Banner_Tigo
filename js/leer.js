// leer mas y leer menos Efecto expander (leer más / leeer menos) en html con js

function vermas(id) {
    if (id == "mas") {
        document.getElementById("desplegar").style.display = "block";
        document.getElementById("mas").style.display = "none";
    } else {
        document.getElementById("desplegar").style.display = "none";
        document.getElementById("mas").style.display = "inline";
    }
}