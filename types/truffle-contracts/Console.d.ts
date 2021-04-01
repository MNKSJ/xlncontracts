/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ConsoleContract extends Truffle.Contract<ConsoleInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ConsoleInstance>;
}

export interface LogAddress {
  name: "LogAddress";
  args: {
    0: string;
    1: string;
  };
}

export interface LogBool {
  name: "LogBool";
  args: {
    0: string;
    1: boolean;
  };
}

export interface LogBytes {
  name: "LogBytes";
  args: {
    0: string;
    1: string;
  };
}

export interface LogBytes32 {
  name: "LogBytes32";
  args: {
    0: string;
    1: string;
  };
}

export interface LogInt {
  name: "LogInt";
  args: {
    0: string;
    1: BN;
  };
}

export interface LogString {
  name: "LogString";
  args: {
    0: string;
    1: string;
  };
}

export interface LogUint {
  name: "LogUint";
  args: {
    0: string;
    1: BN;
  };
}

type AllEvents =
  | LogAddress
  | LogBool
  | LogBytes
  | LogBytes32
  | LogInt
  | LogString
  | LogUint;

export interface ConsoleInstance extends Truffle.ContractInstance {
  methods: {
    "log(string,bytes)": {
      (s: string, x: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,address)": {
      (s: string, x: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,bytes32)": {
      (s: string, x: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,int256)": {
      (
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,string)": {
      (s: string, x: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,uint256)": {
      (
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    "log(string,bool)": {
      (s: string, x: boolean, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        s: string,
        x: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        s: string,
        x: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        s: string,
        x: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
