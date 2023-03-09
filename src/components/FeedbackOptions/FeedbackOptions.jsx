import { Component } from 'react';
import { Button, ButtonList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonList>
        {options.map(item => {
          return (
            <Button
              key={item}
              type="button"
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </Button>
          );
        })}
      </ButtonList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};