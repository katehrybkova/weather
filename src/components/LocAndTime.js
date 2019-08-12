import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        maxWidth: 225,
        margin: 15,
    },
    media: {
      height: 140,
    },
};

function LocAndTime(props) {
    const { classes, cityName,image, localTime } = props;
    return (
        <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography component="p">
                        {cityName}
                    </Typography>
                    <Typography component="p">
                        {moment(localTime).format('dddd')}
                    </Typography>
                    <Typography component="p">
                        {moment(localTime).format('LT')}
                    </Typography>
                </CardContent>

        </Card>
    );
}

LocAndTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocAndTime);

