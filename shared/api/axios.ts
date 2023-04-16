import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://cosmoport.apis.coma-dev.ru/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
