// Função principal para trocar de telas
function navigateTo(screenId) {
  // Oculta todas as telas
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // Exibe a tela de destino
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    // Rola para o topo ao trocar de tela
    window.scrollTo(0, 0);
  }
}

// Função simples para alternar seleção de interesses/chips
function toggleChip(element) {
  element.classList.toggle('selected');
}
