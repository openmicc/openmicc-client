import { configureStore, Middleware, ConfigureStoreOptions, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { createWrapper } from "next-redux-wrapper";

import appReducer, { State as WsState } from './ws';


// Create the middleware instance.
const reduxWebsocketMiddleware = reduxWebsocket({ deserializer: JSON.parse });

// Given a websocket message, dispatch the inner action.
const wsUnwrappingMiddleware: Middleware = store => next => action => {
  const result = next(action);
  if (action.type == 'REDUX_WEBSOCKET::MESSAGE') {
    // Dispatch the inner action
    next(action.payload.message);
  }
  return result;
};


// type AppState = { ws: WsState };

const makeStore = () => configureStore({
  middleware: [reduxWebsocketMiddleware, wsUnwrappingMiddleware],
  reducer: {
    ws: appReducer,
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<AppStore['dispatch']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);

// Other code such as selectors can use the imported `RootState` type
export const selectSignupList = (state: AppState) => state.ws.signupList