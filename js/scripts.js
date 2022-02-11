let palabras = Array("Minato", "Itachi", "Naruto", "Sasuke", "Goku", "vegeta", "Kirito", "Asuna", "Ash", "Eren", "Levi", "Mikasa");
let palabraOC = ""; //palabra oculta
let palabraAdi = ""; //palabra que va adivinando el usuario
let vidas = 4;
document.getElementById("boton").addEventListener("click", comprobar);

inciar();

function inciar() {
    palabraOC = palabras[Math.floor(Math.random() * palabras.length)];

    for (let i = 0; i < palabraOC.length; i++) {
        palabraAdi = palabraAdi + "_ ";

    }

    document.getElementById("frase").innerHTML = palabraAdi;


}

function comprobar() {
    let letra = document.getElementById("letra").value.toLowerCase();
    palabraOC = palabraOC.toLowerCase();
    let nuevo = "";
    for (let i = 0; i < palabraOC.length; i++) {
        if (letra == palabraOC[i]) {
            nuevo = nuevo + letra + " ";
        } else {
            nuevo = nuevo + palabraAdi[i * 2] + " ";
        }
    }
    if (nuevo == palabraAdi) {
        vidas--;

        document.getElementById("vida").innerHTML = "El número de vidas que quedan son: " + vidas;
    }
    palabraAdi = nuevo;
    document.getElementById("frase").innerHTML = palabraAdi;

    if (vidas == 0) {
        document.write("Fin del juego! :( ");
    }
    if (palabraAdi.search("_") == -1) {
        document.write("Ganaste Felicidades!! :D ");

    }

    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();

    dibujar();
}