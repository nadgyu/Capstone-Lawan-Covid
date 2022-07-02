import CONFIG from '../globals/config';

class CovidApiSource {
  static async globalConfirmedCovidApi() {
    const response = await fetch(`${CONFIG.GLOBAL_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.confirmed.value;
  }

  static async globalDeathCovidApi() {
    const response = await fetch(`${CONFIG.GLOBAL_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.deaths.value;
  }

  static async globalRecoveredCovidApi() {
    const response = await fetch(`${CONFIG.GLOBAL_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.recovered.value;
  }

  static async indoConfirmedCovidApi() {
    const response = await fetch(`${CONFIG.INDO_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.confirmed.value;
  }

  static async indoDeathCovidApi() {
    const response = await fetch(`${CONFIG.INDO_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.deaths.value;
  }

  static async indoRecoveredCovidApi() {
    const response = await fetch(`${CONFIG.INDO_COVID_API_URL}`);
    const responseJson = await response.json();
    return responseJson.recovered.value;
  }
}

export default CovidApiSource;
