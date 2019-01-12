import input from './index';
import { render } from 'melody-test-utils';

describe('input', () => {
  it("should render an input with a value of ''", () => {
    const tree = render(input);

    const state = tree.state();

    expect(state.value).toBe('');
  });

  it("should render an input with a value of ''", () => {
    const tree = render(input);

    tree.find('input').simulate('input', { target: { value: 'Hello, Jest' } });

    const state = tree.state();

    expect(state.value).toBe('Hello, Jest');
  });
});
