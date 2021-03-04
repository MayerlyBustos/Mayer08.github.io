var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
// console.log(lienzo);
var lineas = 30;
var l = 0;
var xi, yi, xf, yf;
var colorcito = "#22E1ED";

for(l = 0; l < lineas; l++){
    yi = 10 * l;
    yf = 10 * l;
    xi = 10 * (l - 1);
    xf = 10 * (l + 1);

    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, 300, yi, xf, 0);
    dibujarLinea(colorcito, xi, 0, 300, yf);
}
dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);
dibujarLinea("red", 299, 1, 299, 299);
dibujarLinea("red", 1, 1, 299, 1);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();                 //Iniciar el lienzo
    lienzo.strokeStyle = color;             //Asignarle color
    lienzo.moveTo(xinicial, yinicial);            // Donde va a iniciar la linea
    lienzo.lineTo(xfinal, yfinal);                //finalizar la linea
    lienzo.stroke();                    //Dibujar la linea
    lienzo.closePath();                 // Cerrar el lienzo
    
}