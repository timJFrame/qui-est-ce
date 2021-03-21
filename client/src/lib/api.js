import axios from 'axios'

const baseUrl = '/api'



//*Regsiter a user
export function registerUser(formdata){
  return axios.post(`${baseUrl}/register`, formdata)
}


//*Find an address
export function getUserAddress(postCode){
  return axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.6f8beca7da4e6268d5ee50dbf4a122e7&postalcode=${postCode}f&country&country=england&format=json`)
}