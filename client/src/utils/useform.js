import React from 'react'

function useForm(intialState){
  const [formdata, setFormData] = React.useState(intialState)
  const [errors, setErrors] = React.useState(intialState)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    const nextState = { ...formdata, [e.target.name]: value }
    const nextErrorState = { ...errors, [e.target.name]: '' } 
    setFormData(nextState)
    setErrors(nextErrorState)
    
  }
  return {
    formdata,
    errors,
    handleChange,
    setFormData,
    setErrors
  }

}

export default useForm