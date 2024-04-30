import { Autocomplete, Box, Button, IconButton, TextField } from '@mui/material';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './SMSearchBar.css'


export const SMCountryBar = (props) => {
  console.log(props)
  return (
    <>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: "auto", margin: '10px' }}
        options={props.countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />

      
    </>
  );
};

export default SMCountryBar;
