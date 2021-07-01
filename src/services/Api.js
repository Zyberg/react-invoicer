import Http from '@/services/Http';

export function getCountries() {
  return Http.get('https://restcountries-v1.p.rapidapi.com/all', {
    headers: {
      'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f3b693afc5msh15b97221a05f474p1ad950jsn5c945ddb7aa8'
    }
  });
}

export function getVatRate(countryCode) {
  return Http.get(`https://api.vatlookup.eu/rates/${countryCode}`);
}