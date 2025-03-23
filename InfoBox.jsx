import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1674766642691-395204ee7c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwc2t5fGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1687095951902-31ec078b1a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHNreXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1708886449591-acaf1826f34e?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1542308716-0d8306ad1c08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjBza3l8ZW58MHx8MHx8fDA%3D";
  

    return (
        <div className='InfoBox'>

            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }} 
                        image={
                            info.humidity > 80
                            ?RAIN_URL
                            :info.temp > 15
                            ?HOT_URL
                            :COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>TEMPERATURE: {info.temp}&deg;C</div>
                            <div>HUMIDITY: {info.humidity}</div>
                            <div>TEMPERATURE MIN: {info.tempMin}&deg;C</div>
                            <div>TEMPERATURE MAX: {info.tempMax}&deg;C</div>
                            <div>The weather can be described as <b> <i>{info.weather} </i> </b> but feels like {info.feelslike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}