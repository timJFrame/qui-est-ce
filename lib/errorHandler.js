export const notFound = 'notFound'
export const castError = 'CastError'
export const validationError  = 'ValidationError'
export const unauthorized = 'unauthorized'



export default function errorHandler(err, req, res, next ) {
  console.log('🛑 An Error Has Occured', err.name)
  
  if (err.name === validationError){
    const customErrors = {}

    for (const key in err.errors){
      customErrors[key] = err.errors[key].message
    }
  
    return res.status(422).json({
      message: 'Form Validation Errors',
      errors: customErrors,
    })
  }
  if (err.message === unauthorized){
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (err.name === castError || err.name === notFound){
    return res.status(404).json({ message: 'Not Found' })
  }

  res.sendStatus(500)
  next(err)

}

