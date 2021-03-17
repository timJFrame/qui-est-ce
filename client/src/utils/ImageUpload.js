import React from 'react'
import { TextInput } from 'react-materialize'

const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset  = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

console.log(uploadPreset)
console.log(uploadURL)


function ImageUpload(){
  return (
    <>
      <TextInput
        id="TextInput-4"
        label="Profile Photo"
        type="file"
        noLayout
        className="blue lighten 2"
      />

    </>
  )
}

export default ImageUpload