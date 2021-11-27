import React from 'react'
import Button from '@mui/material/Button/Button'

function BasicButtons({title, handleAction}) {
  return (
    <Button variant='contained' onClick={handleAction}>{title}</Button>
  )
}

export default BasicButtons
