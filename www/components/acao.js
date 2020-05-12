// This is a JavaScript file

$(document).on("click", "#btnSomar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1)+ parseFloat(valor2);
  $("#resultado").val(resultado);
})

$(document).on("click", "#btnSubtrair", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1)- parseFloat(valor2);
  $("#resultado").val(resultado);
})

$(document).on("click", "#btnMultiplicar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1)* parseFloat(valor2);
  $("#resultado").val(resultado);
})

$(document).on("click", "#btnDividir", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var resultado = parseFloat(valor1)/ parseFloat(valor2);
  $("#resultado").val(resultado);
})