// Messages sent from server to client

import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { TransportOptions } from "mediasoup-client/lib/Transport";
import { SignupListEntry } from "../types";

/* NewSignup */

export interface NewSignup {
  entry: SignupListEntry;
  counter: number;
}
export type NewSignupAction = PayloadAction<NewSignup>;
export const newSignup = createAction<NewSignup>("newSignup");

/* ListRemoval */
export interface ListRemoval {
  id: number;
  counter: number;
}
export type ListRemovalAction = PayloadAction<ListRemoval>;
export const listRemoval = createAction<ListRemoval>("listRemoval");


/* WholeSignupList */
export type WholeSignupList = SignupListEntry[];
export type WholeSignupListAction = PayloadAction<WholeSignupList>;
export const wholeSignupList =
  createAction<WholeSignupList>("wholeSignupList");

/* SignupSuccess */
export interface SignupSuccess {
  id: number;
  receipt: string;
}
export type SignupSuccessAction = PayloadAction<SignupSuccess>;
export const signupSuccess =
  createAction<SignupSuccess>("signupSuccess");

/* StartWatching */
export interface StartWatching {
  consumer_transport_options: TransportOptions;
}
export type StartWatchingAction = PayloadAction<StartWatching>;
export const startWatching =
  createAction<StartWatching>("startWatching");

/* StartPerforming */
export type StartPerformingAction = PayloadAction<StartPerforming>;
export interface StartPerforming {
  producer_transport_options: TransportOptions;
}
export const startPerforming =
  createAction<StartPerforming>("startPerforming");