import axios from 'axios'
import { getToken } from './auth'

function headers(){
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

const baseUrl = '/api'
const mapBoxKey = process.env.REACT_APP_MAPBOX_KEY


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
  return axios.get(`${baseUrl}/profile`, headers() )
}

//*Get all cards
export function getAllCards(){
  return axios.get(`${baseUrl}/cards`)
}

//* Post Card
export function postCard(formdata){
  return axios.post(`${baseUrl}/cards`, formdata, headers())
}


//*MAP BOX API

//*Find an address
export function getUserAddress(postCode){
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/postcode=${postCode}.json?access_token=${mapBoxKey}`)
}

export function findReverseAddy(latitude, longitude ){
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/postcode=${longitude},${latitude}.json?access_token=${mapBoxKey}`)
}