function avisoPublicacao(e) {
  if (e) e.preventDefault(); // impede o <a> de navegar
  const modal = document.getElementById('meuAlerta');
  if (!modal) return;
  modal.style.display = 'flex';

  // acessibilidade: foca no botão de fechar
  const btn = modal.querySelector('button');
  if (btn) btn.focus();
}

function fecharAlerta() {
  const modal = document.getElementById('meuAlerta');
  if (!modal) return;
  modal.style.display = 'none';
}