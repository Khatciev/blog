import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement counter', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment counter', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should work with empty state counter', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
