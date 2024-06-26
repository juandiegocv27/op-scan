import { Hash, Address } from "viem";

export type Block = { number: bigint; hash: Hash; timestamp: bigint };

export type Transaction = {
  hash: Hash;
  blockNumber: bigint;
  from: Address;
  to: Address | null;
  value: bigint;
  gasPrice?: bigint;
  timestamp: bigint;
};

export type BlockWithTransactions = Block & { transactions: Transaction[] };

export type L1L2Transaction = {
  l1BlockNumber: bigint;
  l1Hash: Hash;
  l2Hash: Hash;
  timestamp: bigint;
  l1TxHash: string;
  l1TxOrigin: string;
  gasLimit: number;
};
