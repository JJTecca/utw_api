import axios from 'axios';
window.axios = axios;

window.axios.defaults.withCredentials = true; // <--- add this line : not needed for PRODUCTION

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
} else {
    console.error('CSRF token not found: make sure <meta name="csrf-token" content="{{ csrf_token() }}"> is present in your HTML.');
}
