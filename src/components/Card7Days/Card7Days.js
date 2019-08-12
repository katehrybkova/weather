import React from 'react';
import "./Card7Days.css";
import moment from "moment";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        //   maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function Card7Days(props) {
    const { classes, forecastDays } = props;
    return (
        <div className="flex7days">
            {forecastDays.map(el => (

                <div className="oneCard">

                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6">
                                {moment(el.date).format('ddd')}
                            </Typography>
                            <Typography component="p">
                                {moment(el.date).format('ll')}
                            </Typography>

                            <img src={el.day.condition.icon} alt="weather" />


                            <Typography component="p">
                                {el.day.condition.text}
                            </Typography>
                            <Typography component="p">
                                {el.day.maxtemp_c}°C     
                                 </Typography>


                        </CardContent>
                    </CardActionArea>
                </div>
            ))
            }

        </div>
    );
}

Card7Days.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card7Days);


// let Card7Days = ({ forecastDays }) => 


//    ( < div className = "flex7days" >{
//         forecastDays.map(el => (
//             <div className="oneCard" key={el.date}>
//             <h4>{moment(el.date).format('dddd')}</h4>
//             <h4>{moment(el.date).format('ll')}</h4>

//                 <img src={el.day.condition.icon} alt="weather"/>
//                 <p>{el.day.condition.text}</p>
//                 <p>{el.day.maxtemp_c}°C</p>


//                 </div>
//             /* <img width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDoKs1Z1zUbwpVpxVU9mpkntkqaUjvVWRYY_EU3cLijVaGQ_o" alt="weather" />
//              <p>Description</p>
//              moment().format('LL');
//              <p>temperature</p>
//               */


//         ))
//     }</div>)

//     /* < div className = "flex7days" >
//         <div><h3>Day</h3>
//             <p>Date</p>
//             <img width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDoKs1Z1zUbwpVpxVU9mpkntkqaUjvVWRYY_EU3cLijVaGQ_o" alt="weather" />
//             <p>Description</p>
//             <p>temperature</p></div>
//     </div ></> */

// export default Card7Days;
