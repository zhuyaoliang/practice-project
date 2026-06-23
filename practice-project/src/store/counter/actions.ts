import { DECREMENT, INCREMENT, RESET } from './actionTypes'

export const increment = () => ({ type: INCREMENT } as const)

export const decrement = () => ({ type: DECREMENT } as const)

export const reset = () => ({ type: RESET } as const)

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
