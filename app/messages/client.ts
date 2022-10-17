// Messages sent from client to server

import { createAction } from "@reduxjs/toolkit";
import { IdAndReceipt, PerformParams } from "../types";

/* GetList */

export interface GetList {}
export const getList = createAction<GetList>("getList");

/* SignMeUp */

export type SignMeUp = string;
export const signMeUp = createAction<SignMeUp>("signMeUp");

/* TakeMeOff */

export type TakeMeOff = IdAndReceipt;
export const takeMeOff = createAction<TakeMeOff>("takeMeOff");

/* ImReady */

export type ImReady = PerformParams;
export const imReady = createAction<ImReady>("imReady");
