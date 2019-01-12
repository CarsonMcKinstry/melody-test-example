import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents } from 'melody-hoc';
import template from './index.twig';

const intialState = {
  value: ''
};

const CHANGE = 'CHANGE';

const handleChange = value => ({ type: CHANGE, payload: { value } });

const stateReducer = (state = intialState, action) => {
  switch (action.type) {
    case RECEIVE_PROPS:
      return {
        ...state,
        ...action.payload
      };
    case CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const withChangeHandler = bindEvents({
  myInput: {
    input(event, { dispatch }) {
      console.log(event);
      dispatch(handleChange(event.target.value));
    }
  }
});

const component = createComponent(template, stateReducer);

export default withChangeHandler(component);
