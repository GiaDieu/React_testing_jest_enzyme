import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions/guessWord';
export class UnconnectedInput extends Component {
  state = { currentGuess: null };
  submitGuessedWord = (e) => {
    e.preventDefault();

    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };
  render() {
    const contents =
      this.props.success || this.props.gaveUp ? null : (
        <form className="form-inline">
          <input
            type="text"
            data-test="input-box"
            className="mb-2 mx-sm-3"
            placeholder="enter guess..."
            value={this.state.currentGuess}
            onChange={(e) => this.setState({ currentGuess: e.target.value })}
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary"
            onClick={(e) => this.submitGuessedWord(e)}
          >
            Submit
          </button>
        </form>
      );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
