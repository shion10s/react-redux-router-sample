import {SampleAction} from './actions';
import ActionType from './types';

export interface SampleState {
  text:string
}
const initState: SampleState = {
  text:""
};

const sampleReducer = (
  state: SampleState = initState,
  action: SampleAction
): SampleState => {
  switch (action.type) {
    case ActionType.TEXT_CHANGE:
      return {
        ...state,
        text: action.value
      };
    default:
      return state;
  }
};
export default sampleReducer;


