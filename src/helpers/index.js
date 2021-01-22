/**
 * @method getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secretWord
 * @returns {number}
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedWordSet = new Set(guessedWord.split(''));
  const secretWordSet = new Set(secretWord.split(''));

  return Array.from(guessedWordSet).filter((letter) =>
    secretWordSet.has(letter),
  ).length;
}
