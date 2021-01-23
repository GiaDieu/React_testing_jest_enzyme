import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from './actions/getSecretWord';
import Congrats from './component/congrats/Congrats';
import GuessedWords from './component/guessedWords/GuessedWords';
export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
