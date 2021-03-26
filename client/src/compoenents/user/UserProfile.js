import React from 'react'
import { getCurrentUserProfile } from '../../lib/api'

function UserProfile(){

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getCurrentUserProfile()
      console.log(data)
    }
    getData()
  }, [])


  return (
    <div className="container">
      <p>User Profile</p>
    </div>
  )
}

export default UserProfile