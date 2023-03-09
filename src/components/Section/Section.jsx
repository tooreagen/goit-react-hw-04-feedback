import { Component } from 'react';
import { Header } from './Section.styled';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    return (
      <section>
        <Header>{this.props.title}</Header>
        {this.props.children}
      </section>
    );
  }
}


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};