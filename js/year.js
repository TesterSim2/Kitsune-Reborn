const setCurrentYear = () => {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setCurrentYear);
} else {
  setCurrentYear();
}
