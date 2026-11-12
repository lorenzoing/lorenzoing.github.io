'use strict';

const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];

function closeMenu() {
  if (!nav || !menuButton) return;
  nav.classList.remove('is-open');
  menuButton.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (nav?.classList.contains('is-open') && !nav.contains(event.target) && !menuButton?.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main section[id]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-current', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
let opener = null;

document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    if (!dialog?.showModal || !dialogImage || !dialogCaption) return;
    opener = button;
    dialogImage.src = button.dataset.lightbox;
    dialogImage.alt = button.querySelector('img')?.alt || button.dataset.caption || 'Imagen ampliada';
    dialogCaption.textContent = button.dataset.caption || 'Vista ampliada';
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogImage?.removeAttribute('src');
  opener?.focus();
});
