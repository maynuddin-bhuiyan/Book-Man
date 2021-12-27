import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Students = (props) => {

  const { img, name, degeneration, institution, title, _id } = props.student;

  const history = useHistory();


  const handleAddedItam = (id) => {
    const uri = `/detial/${_id}`;
    history.push(uri);
  }
  return (
    <div className='Full_part'>
      <div className="card-part">
      <Card className="Booker" sx={{ maxWidth: 330 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions>

          <Typography variant="body2" color="text.secondary">
            {institution}
          </Typography>


          <Typography variant="body2" color="text.secondary">
            {degeneration}
          </Typography>


        </CardActions>
        <Button onClick={
              () => {
                handleAddedItam(_id);
              }}>View Details
              </Button>
      </Card>
      </div>

      
      

      
    </div>
    
  );
};

export default Students;