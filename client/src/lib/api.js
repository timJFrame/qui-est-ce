import axios from 'axios'

const baseUrl = '/api'

const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY
console.log(mapBoxKey)


//*Regsiter a user
export function registerUser(formdata){
  return axios.post(`${baseUrl}/register`, formdata)
}

//*Logs a user in
export function loginUser(formdata){
  return axios.post(`${baseUrl}/login`, formdata)
}

//*Get current users profile
export function getCurrentUserProfile(){
  return axios.get(`${baseUrl}/profile`)
}


//*MAP BOX API

//*Find an address
export function getUserAddress(postCode){
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/postcode=${postCode}.json?access_token=${mapBoxKey}`)
}