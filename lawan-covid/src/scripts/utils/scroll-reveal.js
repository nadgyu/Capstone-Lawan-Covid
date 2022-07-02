import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

const scrollReveal = () => {
  sr.reveal('.home__data, .footer__container, all-articles__card');
  sr.reveal('.home__images, .all-article__container, detail-article__container', { delay: 600, origin: 'bottom' });
  sr.reveal('.data__card', { interval: 100 });
  sr.reveal('.info__explore:nth-child(1)', { origin: 'right' });
  sr.reveal('.info__explore:nth-child(2)', { origin: 'left' });
};

export default scrollReveal;
