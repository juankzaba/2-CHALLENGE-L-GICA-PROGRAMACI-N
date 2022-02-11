function dibujar() {
    var canvas = document.getElementById('lienzo');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        //Esto dibuja la base del ahorcado
        ctx.beginPath();
        ctx.moveTo(30, 200);
        ctx.lineTo(30, 10);
        ctx.lineTo(150, 10);
        ctx.lineTo(150, 20);
        ctx.stroke();

        //Dibujar cabeza

        if (vidas <= 3) {

            ctx.beginPath();
            ctx.arc(150, 40, 20, 0, Math.PI * 2);
            ctx.stroke();
        }

        //Dibujar cuerpo

        if (vidas <= 2) {
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(150, 100);
            ctx.stroke();
        }

        //Dibujar brazos

        if (vidas <= 1) {

            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(130, 100);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(170, 100);
            ctx.stroke();

        }

        //Dibujar piernas

        if (vidas == 0) {

            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(170, 130);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(130, 130);
            ctx.stroke();

        }

    }
}