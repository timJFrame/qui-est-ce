//*Sets a users token into local storage
export function setToken(token){
  window.localStorage.setItem('token', token)
}

//*Gets users token from local storage
export function getToken(){
  return window.localStorage.getItem('token')
}

//*Logs a user out
export function logout(){
  window.localStorage.removeItem('token')
}

//*Gets palyload from token
function getPayLoad(){
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 2) return false
  return JSON.parse(atob(parts[1]))
}

//*Get user ID 
export function getUserId(){
  return getPayLoad().sub
}

//*Checks to see if a user is authenticated
export function isAuthenticated(){
  const payLoad = getPayLoad()
  if (!payLoad) return false
  const now = Math.round(Date.now() / 1000)
  return now < payLoad.exp
}