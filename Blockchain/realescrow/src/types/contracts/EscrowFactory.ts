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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface EscrowFactoryInterface extends utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "changeAdmin(address)": FunctionFragment;
    "confirmAdminChange()": FunctionFragment;
    "createEscrow()": FunctionFragment;
    "deleteEscrow()": FunctionFragment;
    "escrowCount()": FunctionFragment;
    "escrowFee()": FunctionFragment;
    "escrowFeeRecipient()": FunctionFragment;
    "getEscrow()": FunctionFragment;
    "newAdmin()": FunctionFragment;
    "setEscrowFee(uint256)": FunctionFragment;
    "setEscrowFeeRecipient(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "admin"
      | "changeAdmin"
      | "confirmAdminChange"
      | "createEscrow"
      | "deleteEscrow"
      | "escrowCount"
      | "escrowFee"
      | "escrowFeeRecipient"
      | "getEscrow"
      | "newAdmin"
      | "setEscrowFee"
      | "setEscrowFeeRecipient"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAdminChange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createEscrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deleteEscrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "escrowCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "escrowFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "escrowFeeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getEscrow", values?: undefined): string;
  encodeFunctionData(functionFragment: "newAdmin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setEscrowFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setEscrowFeeRecipient",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmAdminChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEscrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteEscrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "escrowCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "escrowFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "escrowFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEscrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setEscrowFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEscrowFeeRecipient",
    data: BytesLike
  ): Result;

  events: {};
}

export interface EscrowFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EscrowFactoryInterface;

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
    admin(overrides?: CallOverrides): Promise<[string]>;

    changeAdmin(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmAdminChange(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    escrowCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    escrowFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    escrowFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    getEscrow(overrides?: CallOverrides): Promise<[string]>;

    newAdmin(overrides?: CallOverrides): Promise<[string]>;

    setEscrowFee(
      newEscrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEscrowFeeRecipient(
      newEscrowFeeRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  changeAdmin(
    newAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmAdminChange(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createEscrow(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteEscrow(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  escrowCount(overrides?: CallOverrides): Promise<BigNumber>;

  escrowFee(overrides?: CallOverrides): Promise<BigNumber>;

  escrowFeeRecipient(overrides?: CallOverrides): Promise<string>;

  getEscrow(overrides?: CallOverrides): Promise<string>;

  newAdmin(overrides?: CallOverrides): Promise<string>;

  setEscrowFee(
    newEscrowFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEscrowFeeRecipient(
    newEscrowFeeRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    changeAdmin(
      newAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmAdminChange(overrides?: CallOverrides): Promise<void>;

    createEscrow(overrides?: CallOverrides): Promise<string>;

    deleteEscrow(overrides?: CallOverrides): Promise<void>;

    escrowCount(overrides?: CallOverrides): Promise<BigNumber>;

    escrowFee(overrides?: CallOverrides): Promise<BigNumber>;

    escrowFeeRecipient(overrides?: CallOverrides): Promise<string>;

    getEscrow(overrides?: CallOverrides): Promise<string>;

    newAdmin(overrides?: CallOverrides): Promise<string>;

    setEscrowFee(
      newEscrowFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEscrowFeeRecipient(
      newEscrowFeeRecipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    changeAdmin(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmAdminChange(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    escrowCount(overrides?: CallOverrides): Promise<BigNumber>;

    escrowFee(overrides?: CallOverrides): Promise<BigNumber>;

    escrowFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    getEscrow(overrides?: CallOverrides): Promise<BigNumber>;

    newAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setEscrowFee(
      newEscrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEscrowFeeRecipient(
      newEscrowFeeRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeAdmin(
      newAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmAdminChange(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteEscrow(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    escrowCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    escrowFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    escrowFeeRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEscrowFee(
      newEscrowFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEscrowFeeRecipient(
      newEscrowFeeRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}