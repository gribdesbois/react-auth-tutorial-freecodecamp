import Box from '@mui/material/Box/Box'
import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import BasicButtons from './Button'

function BasicTextFields({title}) {
  return (
    <div>
      <div className='heading-container'>
        <h3>
          Login Form
        </h3>
      </div>
      
      <Box
        component='form'
        sx={{
          '& > :not(style)': {m:1, width:'25ch'},
        }}
        noValidate
        autocomplete='off'
        >
          <TextField id='email' label='Enter the Email' variant='outlined' />
          <TextField id='password' label="Enter the Password" variant='outlined'></TextField>
      </Box>
      <BasicButtons title={title}/>
    </div>
  )
}

export default BasicTextFields
