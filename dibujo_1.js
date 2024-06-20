var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibijarPorClick);
  console.log("linea")
function dibujar(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
var d = document.getElementById("300304");
var ancho= d.width
var lienzo = d.getContext("2d");

function dibijarPorClick()
{
  var linea = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / linea;


  while(l < linea)
  {
    yi = espacio * (l + 1)
    xf = espacio * l;
    dibujar("blue",0,yi,xf,300);
    l = l + 1;
  }
  dibujar("blue",1,1,1,ancho - 1);
  dibujar("blue",1,299,300,299);
}
