import ActionType from './types';
import { ActionsUnion } from './util/action-util';

export const changeText = (data:string) => {
  return{
    type:ActionType.TEXT_CHANGE, 
    value:data,
  }
}
export const actions = { changeText };
export type SampleAction = ActionsUnion<typeof actions>;