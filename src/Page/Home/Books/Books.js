import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Books.css'
import { useHistory } from 'react-router-dom';


const Books = (props) => {

    const {img, course, name, degeneration, locationText, userCardText, id} = props.courses;
  
    const history = useHistory();

    const handleCoursesAdded = (id) => {
      const uri = `/courseDetails/${id}`;
      history.push(uri);
    }


    return (  
      
   <div onClick={
    () => {
      handleCoursesAdded(id);
    }} className="Books">

        <Card className="Booker" sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="140"
        image= {img}
        alt="green iguana"
      />
      <CardContent>

      <Typography className='Name' gutterBottom variant="h4" component="div">
          {name}
        </Typography>

        <Typography className='Course' gutterBottom variant="h5" component="div">
          {course}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {degeneration}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{locationText}</Button>
        <Button size="small">{userCardText}</Button>
        

        
      </CardActions>
      <Button onClick={
              () => {
                handleCoursesAdded(id);
              }}>View Details
              </Button>
    </Card>
    </div>
    
 
    );
};

export default Books;