import type { CounterAction } from './actions'
import { DECREMENT, INCREMENT, RESET } from './actionTypes'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export default function counterReducer(
  state = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    case RESET:
      return { ...state, count: 0 }
    default:
      return state
  }
}
