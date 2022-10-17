// Messages sent from server to client

import { createAction } from "@reduxjs/toolkit";
import { RtpCapabilities } from "mediasoup-client/lib/RtpParameters";
import { TransportOptions } from "mediasoup-client/lib/Transport";
import { SignupListEntry } from "../types";

/* Welcome */

export interface Welcome {
  router_rtp_capabilities: RtpCapabilities,
}
export const welcome = createAction<Welcome>("welcome");

/* NewSignup */

export interface NewSignup {
  entry: SignupListEntry;
  counter: number;
}
export const newSignup = createAction<NewSignup>("newSignup");

/* ListRemoval */
export interface ListRemoval {
  id: number;
  counter: number;
}
export const listRemoval = createAction<ListRemoval>("listRemoval");

/* WholeSignupList */
export type WholeSignupList = SignupListEntry[];
export const wholeSignupList = createAction<WholeSignupList>("wholeSignupList");

/* SignupSuccess */
export interface SignupSuccess {
  id: number;
  receipt: string;
}
export const signupSuccess = createAction<SignupSuccess>("signupSuccess");

/* StartWatching */
export interface StartWatching {
  consumer_transport_options: TransportOptions;
}
export const startWatching = createAction<StartWatching>("startWatching");

/* StartPerforming */
export interface StartPerforming {
  producer_transport_options: TransportOptions;
}
export const startPerforming = createAction<StartPerforming>("startPerforming");
