  const userAccounts = [
  { number: "20250001", password: "admin123", file: "../R.I.A/R.I.A.html" },
  { number: "20250002", password: "password2026", file: "page2.html" },
  { number: "20250003", password: "ria123", file: "page3.html" },
  { number: "20250004", password: "secret123", file: "page4.html" },
  { number: "20250005", password: "welcome123", file: "page5.html" }
];

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredNumber = emailInput.value.trim();
  const enteredPassword = passwordInput.value;

  const matchedAccount = userAccounts.find(account =>
    account.number === enteredNumber && account.password === enteredPassword
  );

  if (matchedAccount) {
    window.location.href = matchedAccount.file;
  } else {
    alert("Invalid Number or Password!");
  }
});

const openModal = (id) => document.getElementById(id).classList.add('open');
const closeModal = (id) => document.getElementById(id).classList.remove('open');

document.getElementById('infoBtn').addEventListener('click', () => openModal('infoOverlay'));
document.getElementById('supportBtn').addEventListener('click', () => openModal('supportOverlay'));

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
  }
});

const eyeIcon = document.getElementById('eyeIcon');
const pwd = document.getElementById('password');
document.getElementById('toggleEye').addEventListener('click', () => {
  const isPwd = pwd.type === 'password';
  pwd.type = isPwd ? 'text' : 'password';
  eyeIcon.innerHTML = isPwd
    ? '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.7 19.7 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.7 19.7 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
    : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
});