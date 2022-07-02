const mainContentFocus = () => {
  const skipToContent = document.querySelector('.skip-link');

  skipToContent.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#mainContent').focus();
  });
};

export default mainContentFocus;
