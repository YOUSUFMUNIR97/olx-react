import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SMCard from './SMCard'
import './DetailPage.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DetailPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p>Home / Vehicle</p>
          <h3>Car in Pakistan</h3>
          <h4>Filter</h4>
          <h6>CATEGORIES</h6>
          <div className="header">
            <nav>
              <ul style={{ listStyle: 'none', color: 'rgba(0,47,52,.64)' }}>
                <li><a href="#">All Categories</a></li>
                <ul style={{ listStyle: 'none', color: 'rgba(0,47,52,.64)' }}>
                  <li><a href="#">Cars</a></li>
                  <li><a href="#">Cars Accessories</a></li>
                </ul>
              </ul>
            </nav>
          </div>

          <div>
            <h6>LOCATION</h6>
            <nav>
              <ul style={{ listStyle: 'none', color: 'rgba(0,47,52,.64)' }}>
                <li><a href="#">Pakistan</a></li>
                <ul style={{ listStyle: 'none', color: 'rgba(0,47,52,.64)' }}>
                  <li><a href="#">Punjab</a></li>
                  <li><a href="#">Sindh</a></li>
                  <li><a href="#">Islamabad</a></li>
                </ul>
              </ul>
            </nav>
          </div>

        </Grid>
        <Grid item xs={8} style={{ marginTop: '100px', display: 'flex', flexDirection: "column" }}>
            <SMCard />
    
        </Grid>
      </Grid>
    </Box>

  )
}

export default DetailPage