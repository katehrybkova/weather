import React , {Component} from 'react';

export default class CurrentLocation extends Component {

    state = {
        latitude: null,
        longitude: null
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(success =>
            this.setState({
                latitude: success.coords.latitude,
                longitude: success.coords.longitude
            })
        );
    }

    render() {
        return (
            <div>
                {this.state.latitude}, {this.state.longitude}
            </div>
        );
    }
}

