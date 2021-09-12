let API_URL = 'http://html.technocorp.uz/api';

if(process.env.NODE_ENV === 'development') {
    API_URL = 'http://localhost:5000/api'; // dev mode
}

export default API_URL;
