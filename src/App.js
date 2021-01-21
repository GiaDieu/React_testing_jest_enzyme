import React, { Component } from 'react';
import Congrats from './component/congrats/Congrats';
import GuessedWords from './component/guessedWords/GuessedWords';
class App extends Component {
  render() {
    const guessedWords = [
      {
        guessedWord: 'party',
        letterMatchCount: 5,
      },
    ];
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export default App;
