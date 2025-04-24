
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estadoTexto = document.getElementById("estadoLampada");

function ligarLampada() {
 lampada.src = "img/lampada_on.png";
 lampada.alt = "Lâmpada Ligada";
}
function desligarLampada() {
 lampada.src = "img/lampada_off.png";
 lampada.alt = "Lâmpada Desligada";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

function ligarLampada() {
    lampada.src = "img/lampada_on.png";
    lampada.alt = "Lâmpada Ligada";
    estadoTexto.innerText = "A lâmpada está ligada";
  }
  
  function desligarLampada() {
    lampada.src = "img/lampada_off.png";
    lampada.alt = "Lâmpada Desligada";
    estadoTexto.innerText = "A lâmpada está desligada";
  }
  