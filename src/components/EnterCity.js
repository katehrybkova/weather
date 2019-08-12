import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EnterCity extends React.Component {
  state = {
    name: 'Enter city name',
    age: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { getInput } = this.props;

    return (
      <form onSubmit={getInput}  noValidate autoComplete="off">
        <TextField
        type="text" name="city"
          id="standard-name"
          label="City"
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <Button
        type="submit" 
        >show weather</Button>
        </form>
    );
  }
}

EnterCity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EnterCity;
