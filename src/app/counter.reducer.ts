 export interface Action {
  type: string;
  payload?: any;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload.value;

    case DECREMENT:
      return state - action.payload.value;

    case RESET:
      return 0;

    default:
      return state;
  }
}
