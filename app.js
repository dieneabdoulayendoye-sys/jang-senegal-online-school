document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelector('.primary-button').addEventListener('click', () => {
  document.querySelector('#matieres').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.level-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.level-button').forEach((level) => level.classList.remove('active'));
    button.classList.add('active');
  });
});
