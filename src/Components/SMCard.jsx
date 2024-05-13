import React from 'react'
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import imgage1 from '../assets/images/mobile phone.jpg';
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import data from './Data.jsx'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  // transition: theme.transitions('transform', {
  //   duration: theme.transitions,
  // }),
}));

const CardContainer = styled('div')({
  // display: 'flex',
  // flexWrap: 'wrap',
  // justifyContent: 'space-between',
  // gap: '10px',
  margin: "10px",
});
// display: 'inline-block'

export default function SMCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="row">
        {data.map((x, i) => (

          <div className="col-md-4">
            <CardContainer>
              <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardMedia
                  component="img"
                  height="135"
                  width='100'
                  alt="Paella dish"
                  image={x.img}
                />
                <CardContent>
                  <h6>{x.desc}</h6>
                  <Typography variant="body2" color="text.secondary">
                    {x.title}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                  </ExpandMore>
                </CardActions>
              </Card>

            </CardContainer>
          </div>
        ))}
      </div>

    </>
  );
}

