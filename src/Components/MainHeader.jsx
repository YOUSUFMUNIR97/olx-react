import React from 'react'
import SMIconButton from './SMIconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';


const MainHeader = () => {
  return (
    <>
    <SMIconButton label='Motors' icon={<DirectionsCarIcon/>}/>

    <SMIconButton label='Property' icon={<ApartmentIcon/>}/>
    </>
  )
}

export default MainHeader