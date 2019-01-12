import counter from './index';
import { render } from 'melody-test-utils';

describe('counter', () => {
  let tree;

  beforeEach(() => {
    tree = render(counter);
  });

  it('should render an h3 with a count inside of it', () => {
    const renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: 0');
  });

  it('should increment the count', () => {
    const incrementButton = tree.find('#increment');

    incrementButton.simulate('click');

    const renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: 1');
  });

  it('should decrement the count', () => {
    const decrementButton = tree.find('#decrement');

    decrementButton.simulate('click');

    const renderedCount = tree.find('h3').text();

    expect(renderedCount.trim()).toEqual('Counter: -1');
  });
});
