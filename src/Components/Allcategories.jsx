import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import catimg1 from '../assets/images/mobile.png'
import catimg2 from '../assets/images/vehicle.png'
import catimg3 from '../assets/images/catimg3.png'
import catimg4 from '../assets/images/catimg4.png'
import catimg5 from '../assets/images/catimg5.png'
import catimg6 from '../assets/images/catimg6.png'
import catimg7 from '../assets/images/catimg7.png'
import catimg8 from '../assets/images/catimg8.png'
import catimg9 from '../assets/images/catimg9.png'
import catimg10 from '../assets/images/catimg10.png'
import catimg11 from '../assets/images/catimg11.png'
import catimg12 from '../assets/images/catimg12.png'
import catimg13 from '../assets/images/catimg13.png'
import { Grid } from '@mui/material';

export default function Allcategories() {

    const cateData = [
        {
            image: catimg1,
            title: 'Mobile'
        },
        {
            image: catimg2,
            title: 'Vehicles'
        },
        {
            image: catimg3,
            title: 'Property for Rent'
        },
        {
            image: catimg4,
            title: 'Electronic & Home Appliance'
        },
        {
            image: catimg5,
            title: 'Business Industrial Agriculture'
        },
        {
            image: catimg6,
            title: 'Property for Sale'
        },
        {
            image: catimg7,
            title: 'Fashion & Beauty'
        },
        {
            image: catimg8,
            title: 'Jobs'
        },
        {
            image: catimg9,
            title: 'Service'
        },
        {
            image: catimg10,
            title: 'Bike'
        },
        {
            image: catimg11,
            title: 'Furniture & Home Decor'
        },
        {
            image: catimg12,
            title: 'Kids'
        },
        {
            image: catimg13,
            title: 'Animal'
        },
    ]


    return (
        <div className='container-fluid'>
            <h2 className='mt-3'>All Categories</h2>
        <Grid spacing={1}>
            <Grid item xs={6} md={3} >
                <Box

                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        rowGap:'1.6rem',
                        marginBottom:'4px',
                        alignSelf: 'center',
                        // justifyContent: "center",
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1.5,
                            width: 100,
                            height: 100,

                        },
                    }}
                >


                    {cateData.map((x, i) => {
                        return (
                            <>


                                <div style={{textAlign:"center",alignSelf: 'center'}}>
                                    <img style={{ margin:"10px"}} width='50%' src={x.image} />
                                    <p style={{textAlign:'center', fontSize:'1.1rem', lineHeight:'1.2rem', fontWeight:'700'}}>{x.title}</p>
                                </div>



                            </>
                        )
                    })}

                </Box >
            </Grid>
        </Grid>
        </div>
    );
}