const closeMenuCheckbox = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('.menu ul a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenuCheckbox.checked = false;
  });
});
