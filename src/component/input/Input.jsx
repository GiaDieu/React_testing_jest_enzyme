import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions/guessWord';
export class UnconnectedInput extends Component {
  render() {
    const contents =
      this.props.success || this.props.gaveUp ? null : (
        <form className="form-inline">
          <input
            type="text"
            data-test="input-box"
            className="mb-2 mx-sm-3"
            placeholder="enter guess..."
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary"
            onClick={() => this.props.guessWord('train')}
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
