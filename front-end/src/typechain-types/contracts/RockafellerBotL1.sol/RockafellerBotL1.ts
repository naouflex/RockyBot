/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RockafellerBotL1Interface extends utils.Interface {
  functions: {
    "addFunds(uint8,uint256)": FunctionFragment;
    "currentAmountUSDC()": FunctionFragment;
    "currentAmountWEth()": FunctionFragment;
    "l2ContractAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolFee()": FunctionFragment;
    "receiveInstruction(uint8,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "starknetCore()": FunctionFragment;
    "swapRouter()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateL2Contract(uint256)": FunctionFragment;
    "usdc()": FunctionFragment;
    "weth()": FunctionFragment;
    "withdrawl(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addFunds"
      | "currentAmountUSDC"
      | "currentAmountWEth"
      | "l2ContractAddress"
      | "owner"
      | "poolFee"
      | "receiveInstruction"
      | "renounceOwnership"
      | "starknetCore"
      | "swapRouter"
      | "transferOwnership"
      | "updateL2Contract"
      | "usdc"
      | "weth"
      | "withdrawl"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFunds",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentAmountUSDC",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentAmountWEth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveInstruction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "starknetCore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateL2Contract",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawl",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentAmountUSDC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentAmountWEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveInstruction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "starknetCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateL2Contract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdrawl", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "executedTrade(uint8,uint256)": EventFragment;
    "receivedFunds(address,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "executedTrade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "receivedFunds"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface executedTradeEventObject {
  instruction: number;
  amount: BigNumber;
}
export type executedTradeEvent = TypedEvent<
  [number, BigNumber],
  executedTradeEventObject
>;

export type executedTradeEventFilter = TypedEventFilter<executedTradeEvent>;

export interface receivedFundsEventObject {
  sender: string;
  amount: BigNumber;
  tokenType: number;
}
export type receivedFundsEvent = TypedEvent<
  [string, BigNumber, number],
  receivedFundsEventObject
>;

export type receivedFundsEventFilter = TypedEventFilter<receivedFundsEvent>;

export interface RockafellerBotL1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RockafellerBotL1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addFunds(
      tokenType: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentAmountUSDC(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentAmountWEth(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2ContractAddress(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolFee(overrides?: CallOverrides): Promise<[number]>;

    receiveInstruction(
      instruction: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<[string]>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateL2Contract(
      _l2ContractAddress: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdc(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    withdrawl(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addFunds(
    tokenType: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentAmountUSDC(overrides?: CallOverrides): Promise<BigNumber>;

  currentAmountWEth(overrides?: CallOverrides): Promise<BigNumber>;

  l2ContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolFee(overrides?: CallOverrides): Promise<number>;

  receiveInstruction(
    instruction: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  starknetCore(overrides?: CallOverrides): Promise<string>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateL2Contract(
    _l2ContractAddress: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdc(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  withdrawl(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addFunds(
      tokenType: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentAmountUSDC(overrides?: CallOverrides): Promise<BigNumber>;

    currentAmountWEth(overrides?: CallOverrides): Promise<BigNumber>;

    l2ContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolFee(overrides?: CallOverrides): Promise<number>;

    receiveInstruction(
      instruction: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    starknetCore(overrides?: CallOverrides): Promise<string>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateL2Contract(
      _l2ContractAddress: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdc(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    withdrawl(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "executedTrade(uint8,uint256)"(
      instruction?: null,
      amount?: null
    ): executedTradeEventFilter;
    executedTrade(instruction?: null, amount?: null): executedTradeEventFilter;

    "receivedFunds(address,uint256,uint8)"(
      sender?: null,
      amount?: null,
      tokenType?: null
    ): receivedFundsEventFilter;
    receivedFunds(
      sender?: null,
      amount?: null,
      tokenType?: null
    ): receivedFundsEventFilter;
  };

  estimateGas: {
    addFunds(
      tokenType: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentAmountUSDC(overrides?: CallOverrides): Promise<BigNumber>;

    currentAmountWEth(overrides?: CallOverrides): Promise<BigNumber>;

    l2ContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolFee(overrides?: CallOverrides): Promise<BigNumber>;

    receiveInstruction(
      instruction: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    starknetCore(overrides?: CallOverrides): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateL2Contract(
      _l2ContractAddress: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawl(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFunds(
      tokenType: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentAmountUSDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentAmountWEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ContractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveInstruction(
      instruction: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateL2Contract(
      _l2ContractAddress: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawl(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
