export const scrollToForm = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  
  setTimeout(() => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      const headerOffset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
}; 