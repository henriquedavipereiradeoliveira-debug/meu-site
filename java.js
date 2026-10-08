document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que a página recarregue ao clicar em entrar

  // Captura o que o usuário digitou
  const emailDigitado = document.getElementById('email').value.trim();
  const senhaDigitada = document.getElementById('senha').value;

  // Credenciais para acesso à página especial
  const emailEspecial = "henriquedavipereiradeoliveira@gmail.com";
  const senhaEspecial = "henrique123@#";

  // Verificação
  if (emailDigitado === emailEspecial && senhaDigitada === senhaEspecial) {
    // Redireciona para a página especial
    window.location.href = "pagina-especial.html";
  } else {
    // Redireciona para a página normal
    window.location.href = "pagina-normal.html";
  }
});
