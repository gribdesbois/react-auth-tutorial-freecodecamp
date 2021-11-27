import Box from '@mui/material/Box/Box'
import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import BasicButtons from './Button'

function BasicTextFields({title, setPassword, setEmail, handleAction}) {
  return (
    <div>
      <div className='heading-container'>
        <h3>
          {title} Form
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
          <TextField 
            id='email' 
            label='Enter the Email' 
            variant='outlined' 
            onChange={($event) => setEmail($event.target.value)}
          />
          <TextField
            id='password'
            label="Enter the Password" 
            variant='outlined'
            onChange={($event) => setPassword($event.target.value)}
          />
      </Box>
      <BasicButtons title={title} handleAction={handleAction}/>
    </div>
  )
}

export default BasicTextFields
