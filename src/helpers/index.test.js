import { getLetterMatchCount } from './index';

describe('getLetterMatchCount_method', () => {
  const secretWord = 'party';
  test('return correct count if there are not matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('return correct count if there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('return correct count if there are duplicated letters', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
