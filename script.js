const form = document.getElementById('signupForm');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = (formData.get('firstName') || '').toString().trim();
  const lastName = (formData.get('lastName') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const password = (formData.get('password') || '').toString();
  const confirmPassword = (formData.get('confirmPassword') || '').toString();
  const termsAccepted = formData.get('terms');

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showToast('Preencha todos os campos antes de continuar.');
    return;
  }

  if (password.length < 6) {
    showToast('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  if (password !== confirmPassword) {
    showToast('As senhas não conferem.');
    return;
  }

  if (!termsAccepted) {
    showToast('Você precisa aceitar os termos de uso.');
    return;
  }

  showToast(`Cadastro realizado com sucesso, ${firstName}!`);
  form.reset();
});
