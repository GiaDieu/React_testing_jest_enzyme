import { shallow } from 'enzyme';
import Input, { UnconnectedInput } from './Input';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('does not renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as props', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    // set up mock for `guessWord`
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };

    //set up input component with guessedWordMock as the guessedWord Prop
    wrapper = shallow(<UnconnectedInput {...props} />);

    //add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    //simulate clicked
    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    submitBtn.simulate('click', { preventDefault() {} });
  });

  it('calls `guessWord` when button is clicked', () => {
    //check to see if the mock ran;
    const guessedWordCallCounnts = guessWordMock.mock.calls.length;
    expect(guessedWordCallCounnts).toBe(1);
  });

  it('calls `guessWord` with input value as argument', () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  it('input box clear clears on Submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  });
});
