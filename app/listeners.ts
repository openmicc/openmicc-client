import { createListenerMiddleware } from "@reduxjs/toolkit";
import { Device } from "mediasoup-client";
import { welcome } from "./messages/server";
import { soup } from "./soup";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: welcome,
  effect: async (action, listenerApi) => {
    console.log('creating devices')
    soup.device = new Device();
    console.log('loading device');
    await soup.device.load(action.payload);
    console.log('device loaded!');
  }
});