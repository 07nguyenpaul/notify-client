import Web3 from 'web3';

const { REACT_APP_ETH_URL, REACT_APP_ETH_ACCOUNT } = process.env;

export const w3 = new Web3(new Web3.providers.HttpProvider(REACT_APP_ETH_URL));

w3.eth.defaultAccount = REACT_APP_ETH_ACCOUNT;

export default w3;
