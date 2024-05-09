import { Button, IconButton } from '@mui/material'
import React from 'react'
import './buttons.css'


const SMIconButton = (props) => {
  return (
    <Button style={{
      color: "#002f34",
    }} startIcon={ // StartIcon prop to add the icon
      <IconButton className='mainheadicon' >
        {props.icon} {/* The icon passed as a prop */}
      </IconButton>
    }
  >
      {props.label}
    </Button>
  )
}

export default SMIconButton