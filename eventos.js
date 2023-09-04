var div = document.getElementById("boton");

div.addEventListener("click", function(event) {
    if (event.target !== this) {
        return;
    }
    alert("Hola! Soy el div");
});