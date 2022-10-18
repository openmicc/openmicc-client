import { createSlice } from "@reduxjs/toolkit";
import { RtpCapabilities, RtpParameters } from "mediasoup-client/lib/RtpParameters";
import { HYDRATE } from "next-redux-wrapper";
import { saveReceipt } from "../functions/receipts";
import {
  listRemoval,
  newSignup,
  signupSuccess,
  startPerforming,
  startWatching,
  welcome,
  wholeSignupList,
} from "./messages/server";
import { SignupListEntry } from "./types";

// type NewSignup = Action<NewSignup, 'newSignup'>;
// type WholeSignupList = Action<WholeSignupList, 'wholeSignupList'>;
// type Action = NewSignup | WholeSignupList;

// NOTE: These actions are never actually dispatched manually,
// only received from server over websockets.

// Define a type for the slice state
export interface State {
  signupList: SignupListEntry[];
  routerRtpCapabilities?: RtpCapabilities
}

// Define the initial state using that type
const initialState: State = {
  signupList: [],
};

export const appSlice = createSlice({
  name: "ws",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // From https://blog.logrocket.com/use-redux-next-js/
    builder
      .addCase(welcome, (state, action) => {
        const { routerRtpCapabilities } = action.payload;
        return { ...state, routerRtpCapabilities };
      })
      .addCase(newSignup, (state, action) => {
        // TODO: CHECK LAST COUNTER VALUE
        const { entry } = action.payload;
        let signupList = state.signupList.concat(entry);

        return { ...state, signupList };
      })
      .addCase(listRemoval, (state, action) => {
        // TODO: CHECK LAST COUNTER VALUE
        const { id } = action.payload;
        const filtered = state.signupList.filter((entry) => entry.id != id);

        return { ...state, signupList: filtered };
      })
      .addCase(wholeSignupList, (state, action) => {
        let signupList = action.payload;
        return { ...state, signupList };
      })
      .addCase(signupSuccess, (state, action) => {
        // TODO: Is it a bad idea to produce side-effects
        // from this reducer?
        let { id, receipt } = action.payload;
        saveReceipt(id, receipt);
      })
      .addCase(startWatching, (state, action) => {})
      .addCase(startPerforming, (state, action) => {})
      .addCase(HYDRATE, (state, action) => {
        return {
          // TODO: Reconcile states upon hydration?
          // It seems like I'm supposed to do this,
          // but typescript is complaining about
          // action.payload, and I only want
          // client-side state anyhow.
          // See https://github.com/kirill-konshin/next-redux-wrapper#redux-toolkit
          ...state,
          // ...action.payload,
        };
      });
  },
});

// const reducer: Reducer<State, Action> = appSlice.reducer;

export default appSlice.reducer;
