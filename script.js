function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const taxa = 5.2; // valor fixo
  const convertido = valor / taxa;

  const resultado = document.getElementById('resultado');
  resultado.innerText = `R$${valor.toFixed(2)} = US$${convertido.toFixed(2)}`;
  resultado.style.animation = 'fadeInUp 0.5s ease forwards';
}
