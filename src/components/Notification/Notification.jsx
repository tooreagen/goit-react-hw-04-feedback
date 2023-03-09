import { Component } from "react";
import { Text } from './Notification.styled';
import PropTypes from 'prop-types';

export class Notification extends Component {
    render() {
        return <Text>{this.props.message}</Text>;
    }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};