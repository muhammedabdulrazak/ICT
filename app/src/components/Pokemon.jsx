import { Grid } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    var [user, setuser] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
    return (
        <Grid>
          
            <Grid item xs={8}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                

             
            </Grid></Grid>
    )
}
export default Pokemon