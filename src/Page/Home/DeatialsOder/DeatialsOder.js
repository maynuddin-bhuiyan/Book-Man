import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DeatialsOder = () => {


    const { id } = useParams();
    
    const [detiles, setDetiles] = useState([]);

    const [detilesItam, setDetilesItam] = useState([]);


    


    useEffect(() => {
        fetch(`https://whispering-gorge-92937.herokuapp.com/student`)
            .then(res => res.json())
            .then(data => {
                setDetiles(data);
            });




    }, []);



    useEffect(() => {

        if (detiles.length > 0) {
            const matchItam = detiles.find(student => student._id == id)
            setDetilesItam(matchItam);
            console.log(matchItam);
        }



    }, [detiles]);

    return (
        <div>
            <h1>Deatials Oder</h1>
            <Card className="Booker" sx={{ maxWidth: 330 }}>
      <CardMedia
        component="img"
        height="140"
        image= {detilesItam?.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {detilesItam?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {detilesItam?.degeneration}
        </Typography>
      </CardContent>
     
      
    </Card>

    
<Link to="/"><Button variant="outlined"> Home </Button></Link> <br /><br /><br />


        </div>
    );
};

export default DeatialsOder;