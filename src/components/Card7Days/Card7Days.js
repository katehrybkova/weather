import React from 'react';
import "./Card7Days.css";
import moment from "moment";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
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

