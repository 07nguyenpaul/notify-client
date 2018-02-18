import axios from 'axios';

class Price {
  async getEtherPrice() {
    const url =
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
    const response = await axios.get(url);

    return response.data.USD;
  }
}

export default new Price();
