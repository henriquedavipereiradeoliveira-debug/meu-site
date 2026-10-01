// Inicializa os ícones da biblioteca Lucide
lucide.createIcons();

// Elementos da página
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const eyeIcon = document.getElementById('eyeIcon');

// Alterna a visibilidade da senha (mostrar / ocultar)
togglePasswordBtn.addEventListener('click', () => {
  const isPassword = senhaInput.type === 'password';
  senhaInput.type = isPassword ? 'text' : 'password';
  
  // Atualiza o ícone (olho aberto / olho fechado)
  eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
  lucide.createIcons();
});

// Evento de envio do formulário de login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  const emailValue = emailInput.value.trim();

  if (emailValue) {
    // 1. Salva os dados do usuário no localStorage
    localStorage.setItem('usuarioEmail', emailValue);
    localStorage.setItem('estaLogado', 'true');

    // 2. Redireciona para a página interna/dashboard
    window.location.href = 'dashboard.html';
  }
});
