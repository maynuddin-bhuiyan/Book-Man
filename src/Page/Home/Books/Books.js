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

    const {img,name,degeneration,locationText,userCardText,_id} = props.books;
  
    const history = useHistory();

    const handleAddedItam = (id) => {
      const uri = `/detial/${_id}`;
      history.push(uri);
    }


    return (  
   <div className="Books">

        <Card className="Booker" sx={{ maxWidth: 330 }}>
      <CardMedia
        component="img"
        height="140"
        image= {img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
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
                handleAddedItam(_id);
              }}>View Details
              </Button>
    </Card>
    </div>
    

    );
};

export default Books;