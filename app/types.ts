import { RtpParameters } from "mediasoup-client/lib/RtpParameters";

export type SignupListEntryText = string;
export type SignupReceipt = string;
export type SignupId = number;

export interface SignupListEntry {
  id: SignupId;
  text: SignupListEntryText;
}

export interface IdAndReceipt {
  id: SignupId;
  receipt: SignupReceipt;
}

export interface PerformParams {
  signup_receipt: SignupReceipt;
  rtp_parameters: RtpParameters;
}
