import axios from 'axios'
import React from 'react'
import { TextInput } from 'react-materialize'

const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset  = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

function ImageUpload({ onChange, name, value }){



  const handleUpload = async e => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadURL, data)
    onChange({ target: { name, value: res.data.url } })

  }

  return (
    <>
      {value ? <>
        <div className="profile-photo-div">
          <img src={value} alt="selected" style={{ width: '100%', height: 'auto' }}/>
        </div>
      </>
        :
      
        <TextInput
          id="TextInput-4"
          label="Profile Photo"
          type="file"
          noLayout
          onChange={handleUpload}
          name={name}
        />
      
      }
    </>
  )
}

export default ImageUpload