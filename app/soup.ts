import { createAction, Middleware } from "@reduxjs/toolkit";  import { Device } from "mediasoup-client";
import { Transport } from "mediasoup-client/lib/Transport";

export interface Soup {
  device?: Device;
  producerTransport?: Transport;
  consumerTransport?: Transport;
}

export interface SoupTest {}
export const soupTest = createAction<SoupTest>("soup::test");

// Initialize a mutable global variable D:
// https://stackoverflow.com/a/55624363/4228052
export const soup: Soup = {
};
