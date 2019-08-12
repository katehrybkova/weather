import React from 'react';
import "./Card1Day.css";
import moment from "moment";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
    card: {
    },
    media: {
      height: 140,
    },
  };
  
  function Card1Day(props) {
    const { classes, date, sunrise, sunset, cityName, numberDays, localTime, isLoading, maxtemp_c, mintemp_c, text, iconUrl, forecastDays } = props;
    return (
      <Card className={classes.card}>
          
        <div className="card1dayMain">
         <div className="card1dayFlex">
             <div>
                 <h1>{cityName}</h1>
             <h4>{moment(date).format('dddd')}</h4>
             <h4>{moment(date).format('ll')}</h4>
                 <div className="half1Card">
                     <div>
                         <h4>{text}</h4>
                         <img width="100px" src={iconUrl} alt="weather" />
                     </div>
                     <div>
                         <p>Day: {maxtemp_c}°C</p>
                         <p>Night: {mintemp_c}°C</p>
                         <p>Sunrise: {sunrise}</p>
                         <p>Sunset: {sunset}</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>

        
      </Card>
    );
  }
  
  Card1Day.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Card1Day);







// let Card1Day = ({ date, sunrise, sunset, cityName, numberDays, localTime, isLoading, maxtemp_c, mintemp_c, text, iconUrl, forecastDays }) => (<>
//     <div className="card1dayMain">
//         <div className="card1dayFlex">
//             <div>
//                 <h1>{cityName}</h1>
//             <h4>{moment(date).format('dddd')}</h4>
//             <h4>{moment(date).format('ll')}</h4>
//                 <div className="half1Card">
//                     <div>
//                         <h4>{text}</h4>
//                         <img width="100px" src={iconUrl} alt="weather" />
//                     </div>
//                     <div>
//                         <p>Day: {maxtemp_c}°C</p>
//                         <p>Night: {mintemp_c}°C</p>
//                         <p>Sunrise: {sunrise}</p>
//                         <p>Sunset: {sunset}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div></>
// )
// export default Card1Day;
