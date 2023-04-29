import { configureStore } from '@reduxjs/toolkit';
export function createReduxStore(initialState) {
    return configureStore({
        reducer: {
            reducer: {
                counter: Counter
            },
            devTools: __IS_DEV__,
            preloadedState: initialState,
        },
    });
}
