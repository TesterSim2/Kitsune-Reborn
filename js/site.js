(function () {
  const navbar = document.getElementById('mainNav');
  if (!navbar) {
    return;
  }

  const applyNavbarState = () => {
    const hasScrolled = window.scrollY > 10;
    navbar.classList.toggle('navbar-scrolled', hasScrolled);
  };

  applyNavbarState();
  window.addEventListener('scroll', applyNavbarState, { passive: true });

  const collapseElement = navbar.querySelector('.navbar-collapse');
  if (!collapseElement) {
    return;
  }

  collapseElement.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('navbar-scrolled');
  });

  collapseElement.addEventListener('hidden.bs.collapse', applyNavbarState);
})();
