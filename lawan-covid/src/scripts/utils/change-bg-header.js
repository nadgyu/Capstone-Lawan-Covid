/* eslint-disable no-unused-expressions */
const scrollHeader = () => {
  const header = document.getElementById('header');
  const scrollY = window.pageYOffset;
  scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
};

export default scrollHeader;
