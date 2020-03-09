


let botao1 = $('#option1');
let botao2 = $('#option2');


botao1.click(function (e) {
  // e.preventDefault();
  console.log(botao1);

  if (botao1.checked) {
    window.alert('Ligado');
  } else {
    window.alert('Ligado');
  }

});



botao2.click(function (e) {
  e.preventDefault();
  window.alert("Botão2");

});