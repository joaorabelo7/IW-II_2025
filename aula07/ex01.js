const imagem = document.getElementById("imagemPrincipal");

function mostrarImagem(numero) {
  if (numero === 1) {
    imagem.src = "img/tyler.jpeg";
  } else if (numero === 2) {
    imagem.src = "img/edwards.jpeg";
  } else if (numero === 3) {
    imagem.src = "img/adebayo.jpg";
  }
}