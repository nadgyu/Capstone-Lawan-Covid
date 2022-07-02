/* eslint-disable max-len */
import ArticlesSource from '../../data/articles-source';
import CovidApiSource from '../../data/covid-api-source';
import mainContentFocus from '../../utils/main-content-focus';
import scrollReveal from '../../utils/scroll-reveal';
import { createCovidDataTemplate, createArticleItemTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
<!-- =============== HOME ============ -->
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <h1 class="home__title">
            Pusat Informasi <br> 
            Covid-19 <br>
            Indonesia
          </h1>

          <p class="home__description">
            Media komunikasi dan informasi penanganan <br> 
            Covid-19 satu pintu di Indonesia.
          </p>
          <a href="#data" class="button__link">
            Lihat data <i class="ri-arrow-right-line"></i>
          </a>
        </div>

        <div class="home__images">
          <img src="https://images.unsplash.com/photo-1584466990297-7e8ab67a5eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
          <img src="https://images.unsplash.com/photo-1623701197215-3fe8e52f618e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="">
        </div>
      </div>
    </section>

    <!-- ======= DATA MONITORING ====== -->
    <section class="data section" id="data">
      <h2 class="section__title">
        Data Monitoring Covid
      </h2>

      <div class="data__container container grid">
        <div class="data__card">
          <h2 class="data__title">
            Terkonfirmasi
          </h2>
          <span>Global</span>
          <p class="data__number data__confirmed global-confirmed-covid"></p>
          <span>Indonesia</span>
          <p class="data__number data__confirmed indo-confirmed-covid"></p>
        </div>
        <div class="data__card">
          <h2 class="data__title">
            Sembuh
          </h2>
          <span>Global</span>
          <p class="data__number data__recovered global-recovered-covid"></p>
          <span>Indonesia</span>
          <p class="data__number data__recovered indo-recovered-covid"></p>
        </div>
        <div class="data__card">
          <h2 class="data__title">
            Meninggal
          </h2>
          <span>Global</span>
          <p class="data__number data__deaths global-death-covid"></p>
          <span>Indonesia</span>
          <p class="data__number data__deaths indo-death-covid"></p>
        </div>
      </div>
    </section>

    <!-- ========== INFORMATION ======== -->
    <section class="info section" id="info">
      <div class="info__container container">
        <div class="info__explore">
          <div class="info__data-vaccine">
            <h2 class="info__title">
              Social <br> Distancing
            </h2>
            <a href="#/detail/4" class="button__link">
              Selengkapnya <i class="ri-arrow-right-line"></i>
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1587235044459-f2dc88ab6cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="">
        </div>
        <div class="info__explore">
          <img src="https://images.unsplash.com/photo-1616279969856-759f316a5ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
          <div class="info__data-isoman">
            <h2 class="info__title">
              Olahraga <br> di Masa Pandemi
            </h2>
            <a href="#/detail/14" class="button__link">
              Selengkapnya <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= ARTICLES ======= -->
    <section class="all-articles section" id="articles">
    <h2 class="section__title">Artikel Terkait</h2>
    <div class="all-articles__container container grid">
    </div>   
  </section>
    `;
  },

  async afterRender() {
    scrollReveal();
    mainContentFocus();

    const articles = await ArticlesSource.Articles();
    const articlesContainer = document.querySelector('.all-articles__container');
    for (let i = 0; i < 2; i += 1) {
      articlesContainer.innerHTML += createArticleItemTemplate(articles[i]);
    }

    const globalConfirmedCovid = await CovidApiSource.globalConfirmedCovidApi();
    const globalConfirmedCovidContainer = document.querySelector('.global-confirmed-covid');
    globalConfirmedCovidContainer.innerHTML += createCovidDataTemplate(globalConfirmedCovid.toLocaleString());

    const globalDeathCovid = await CovidApiSource.globalDeathCovidApi();
    const globalDeathCovidContainer = document.querySelector('.global-death-covid');
    globalDeathCovidContainer.innerHTML += createCovidDataTemplate(globalDeathCovid.toLocaleString());

    const globalRecoveredCovid = await CovidApiSource.globalRecoveredCovidApi();
    const globalRecoveredCovidContainer = document.querySelector('.global-recovered-covid');
    globalRecoveredCovidContainer.innerHTML += createCovidDataTemplate(globalRecoveredCovid.toLocaleString());

    const indoConfirmedCovid = await CovidApiSource.indoConfirmedCovidApi();
    const indoConfirmedCovidContainer = document.querySelector('.indo-confirmed-covid');
    indoConfirmedCovidContainer.innerHTML += createCovidDataTemplate(indoConfirmedCovid.toLocaleString());

    const indoDeathCovid = await CovidApiSource.indoDeathCovidApi();
    const indoDeathCovidContainer = document.querySelector('.indo-death-covid');
    indoDeathCovidContainer.innerHTML += createCovidDataTemplate(indoDeathCovid.toLocaleString());

    const indoRecoveredCovid = await CovidApiSource.indoRecoveredCovidApi();
    const indoRecoveredCovidContainer = document.querySelector('.indo-recovered-covid');
    indoRecoveredCovidContainer.innerHTML += createCovidDataTemplate(indoRecoveredCovid.toLocaleString());
  },
};

export default Homepage;
