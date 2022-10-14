import { createSlice, Action, PayloadAction, createReducer, Reducer, createAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";

type NewSignupPayload = Readonly<{
    name: string,
    counter: number,
}>;

type WholeSignupListPayload = string[];

// type NewSignup = PayloadAction<NewSignupPayload, 'newSignup'>;
// type WholeSignupList = PayloadAction<WholeSignupListPayload, 'wholeSignupList'>;
// type Action = NewSignup | WholeSignupList;

// Define a type for the slice state
export interface State {
    signupList: string[],
}

// Define the initial state using that type
const initialState: State = {
    signupList: [],
}

export const newSignup = createAction<NewSignupPayload>('newSignup');
export const wholeSignupList = createAction<WholeSignupListPayload>('wholeSignupList');


// const reducers = createReducer(initialState, builder => {
//     builder
//         .addCase(newSignup, (state, action) => {
//             console.log("NEW SIGNUP");
//             const { name } = action.payload;
//             // TODO: CHECK LAST COUNTER VALUE
//             state.signupList.push(name);
//         })
//         .addCase(wholeSignupList, (state, action) => {
//             console.log("WHOLE SIGNUP LIST");
//             state.signupList = action.payload;
//         })

// })

export const appSlice = createSlice({
    name: 'ws',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    // reducers: {
    //     newSignup: (state, action: PayloadAction<NewSignupPayload>) => {
    //         console.log("NEW SIGNUP");
    //         const { name } = action.payload;
    //         // TODO: CHECK LAST COUNTER VALUE
    //         state.signupList.push(name);
    //     },
    //     wholeSignupList: (state, action: PayloadAction<WholeSignupListPayload>) => {
    //         console.log("WHOLE SIGNUP LIST");
    //         state.signupList = action.payload;
    //     },
    // },
    extraReducers: builder => {
        // Special reducer for hydrating the state. Special case for next-redux-wrapper
        // From https://blog.logrocket.com/use-redux-next-js/
        builder

            .addCase(newSignup, (state, action) => {
                console.log("NEW SIGNUP");
                const { name } = action.payload;
                // TODO: CHECK LAST COUNTER VALUE
                state.signupList.push(name);
            })
            .addCase(wholeSignupList, (state, action) => {
                console.log("WHOLE SIGNUP LIST");
                state.signupList = action.payload;
            })

            .addCase(HYDRATE, (state, action) => {
                return {
                    // TODO: Reconcile states upon hydration?
                    // It seems like I'm supposed to do this,
                    // but typescript is complaining about
                    // action.payload, and I only want
                    // client-side state anyhow.
                    // See https://github.com/kirill-konshin/next-redux-wrapper#redux-toolkit
                    ...state
                    // ...action.payload,
                };
            });
    }
});

// const reducer: Reducer<State, Action> = appSlice.reducer;


export default appSlice.reducer;