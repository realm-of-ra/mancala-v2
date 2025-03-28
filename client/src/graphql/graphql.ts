/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ByteArray: { input: any; output: any; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Enum: { input: any; output: any; }
  bool: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u16: { input: any; output: any; }
  u32: { input: any; output: any; }
  u64: { input: any; output: any; }
  u128: { input: any; output: any; }
};

export type Erc20__Token = {
  __typename?: 'ERC20__Token';
  amount: Scalars['String']['output'];
  contractAddress: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type Erc721__Token = {
  __typename?: 'ERC721__Token';
  contractAddress: Scalars['String']['output'];
  imagePath: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  metadataAttributes?: Maybe<Scalars['String']['output']>;
  metadataDescription?: Maybe<Scalars['String']['output']>;
  metadataName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  tokenId: Scalars['String']['output'];
};

export type Erc__Token = Erc20__Token | Erc721__Token;

export type ModelUnion = Mancala_Monday_Capture | Mancala_Monday_EndTurn | Mancala_Monday_GameCounter | Mancala_Monday_MancalaBoard | Mancala_Monday_Pit | Mancala_Monday_Player | Mancala_Monday_PlayerExtraTurn | Mancala_Monday_PlayerMove | Mancala_Monday_Profile | Mancala_Monday_Seed | Mancala_Monday_Settings | Mancala_Monday_TrophyCreation | Mancala_Monday_TrophyProgression | Mancala_Stone_Capture | Mancala_Stone_EndTurn | Mancala_Stone_GameCounter | Mancala_Stone_MancalaBoard | Mancala_Stone_Pit | Mancala_Stone_Player | Mancala_Stone_PlayerExtraTurn | Mancala_Stone_PlayerMove | Mancala_Stone_Profile | Mancala_Stone_Seed | Mancala_Stone_Settings | Mancala_Stone_TrophyCreation | Mancala_Stone_TrophyProgression;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Token__Balance = {
  __typename?: 'Token__Balance';
  tokenMetadata: Erc__Token;
};

export type Token__BalanceConnection = {
  __typename?: 'Token__BalanceConnection';
  edges?: Maybe<Array<Maybe<Token__BalanceEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Token__BalanceEdge = {
  __typename?: 'Token__BalanceEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Token__Balance>;
};

export type Token__Transfer = {
  __typename?: 'Token__Transfer';
  executedAt: Scalars['String']['output'];
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
  tokenMetadata: Erc__Token;
  transactionHash: Scalars['String']['output'];
};

export type Token__TransferConnection = {
  __typename?: 'Token__TransferConnection';
  edges?: Maybe<Array<Maybe<Token__TransferEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Token__TransferEdge = {
  __typename?: 'Token__TransferEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Token__Transfer>;
};

export type World__Content = {
  __typename?: 'World__Content';
  coverUri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Array<Maybe<World__Social>>>;
  website?: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges?: Maybe<Array<Maybe<World__EventEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Event>;
};

export type World__EventMessage = {
  __typename?: 'World__EventMessage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EventMessageConnection = {
  __typename?: 'World__EventMessageConnection';
  edges?: Maybe<Array<Maybe<World__EventMessageEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__EventMessageEdge = {
  __typename?: 'World__EventMessageEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__EventMessage>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content?: Maybe<World__Content>;
  coverImg?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  iconImg?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
  worldAddress: Scalars['String']['output'];
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  classHash?: Maybe<Scalars['felt252']['output']>;
  contractAddress?: Maybe<Scalars['felt252']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Model>;
};

export type World__ModelOrder = {
  direction: OrderDirection;
  field: World__ModelOrderField;
};

export enum World__ModelOrderField {
  ClassHash = 'CLASS_HASH',
  Name = 'NAME'
}

export type World__PageInfo = {
  __typename?: 'World__PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type World__Query = {
  __typename?: 'World__Query';
  entities?: Maybe<World__EntityConnection>;
  entity: World__Entity;
  eventMessage: World__EventMessage;
  eventMessages?: Maybe<World__EventMessageConnection>;
  events?: Maybe<World__EventConnection>;
  mancalaMondayCaptureModels?: Maybe<Mancala_Monday_CaptureConnection>;
  mancalaMondayEndTurnModels?: Maybe<Mancala_Monday_EndTurnConnection>;
  mancalaMondayGameCounterModels?: Maybe<Mancala_Monday_GameCounterConnection>;
  mancalaMondayMancalaBoardModels?: Maybe<Mancala_Monday_MancalaBoardConnection>;
  mancalaMondayPitModels?: Maybe<Mancala_Monday_PitConnection>;
  mancalaMondayPlayerExtraTurnModels?: Maybe<Mancala_Monday_PlayerExtraTurnConnection>;
  mancalaMondayPlayerModels?: Maybe<Mancala_Monday_PlayerConnection>;
  mancalaMondayPlayerMoveModels?: Maybe<Mancala_Monday_PlayerMoveConnection>;
  mancalaMondayProfileModels?: Maybe<Mancala_Monday_ProfileConnection>;
  mancalaMondaySeedModels?: Maybe<Mancala_Monday_SeedConnection>;
  mancalaMondaySettingsModels?: Maybe<Mancala_Monday_SettingsConnection>;
  mancalaMondayTrophyCreationModels?: Maybe<Mancala_Monday_TrophyCreationConnection>;
  mancalaMondayTrophyProgressionModels?: Maybe<Mancala_Monday_TrophyProgressionConnection>;
  mancalaStoneCaptureModels?: Maybe<Mancala_Stone_CaptureConnection>;
  mancalaStoneEndTurnModels?: Maybe<Mancala_Stone_EndTurnConnection>;
  mancalaStoneGameCounterModels?: Maybe<Mancala_Stone_GameCounterConnection>;
  mancalaStoneMancalaBoardModels?: Maybe<Mancala_Stone_MancalaBoardConnection>;
  mancalaStonePitModels?: Maybe<Mancala_Stone_PitConnection>;
  mancalaStonePlayerExtraTurnModels?: Maybe<Mancala_Stone_PlayerExtraTurnConnection>;
  mancalaStonePlayerModels?: Maybe<Mancala_Stone_PlayerConnection>;
  mancalaStonePlayerMoveModels?: Maybe<Mancala_Stone_PlayerMoveConnection>;
  mancalaStoneProfileModels?: Maybe<Mancala_Stone_ProfileConnection>;
  mancalaStoneSeedModels?: Maybe<Mancala_Stone_SeedConnection>;
  mancalaStoneSettingsModels?: Maybe<Mancala_Stone_SettingsConnection>;
  mancalaStoneTrophyCreationModels?: Maybe<Mancala_Stone_TrophyCreationConnection>;
  mancalaStoneTrophyProgressionModels?: Maybe<Mancala_Stone_TrophyProgressionConnection>;
  metadatas?: Maybe<World__MetadataConnection>;
  model: World__Model;
  models?: Maybe<World__ModelConnection>;
  tokenBalances?: Maybe<Token__BalanceConnection>;
  tokenTransfers?: Maybe<Token__TransferConnection>;
  transaction: World__Transaction;
  transactions?: Maybe<World__TransactionConnection>;
};


export type World__QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventMessageArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryEventMessagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryMancalaMondayCaptureModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_CaptureOrder>;
  where?: InputMaybe<Mancala_Monday_CaptureWhereInput>;
};


export type World__QueryMancalaMondayEndTurnModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_EndTurnOrder>;
  where?: InputMaybe<Mancala_Monday_EndTurnWhereInput>;
};


export type World__QueryMancalaMondayGameCounterModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_GameCounterOrder>;
  where?: InputMaybe<Mancala_Monday_GameCounterWhereInput>;
};


export type World__QueryMancalaMondayMancalaBoardModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_MancalaBoardOrder>;
  where?: InputMaybe<Mancala_Monday_MancalaBoardWhereInput>;
};


export type World__QueryMancalaMondayPitModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_PitOrder>;
  where?: InputMaybe<Mancala_Monday_PitWhereInput>;
};


export type World__QueryMancalaMondayPlayerExtraTurnModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_PlayerExtraTurnOrder>;
  where?: InputMaybe<Mancala_Monday_PlayerExtraTurnWhereInput>;
};


export type World__QueryMancalaMondayPlayerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_PlayerOrder>;
  where?: InputMaybe<Mancala_Monday_PlayerWhereInput>;
};


export type World__QueryMancalaMondayPlayerMoveModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_PlayerMoveOrder>;
  where?: InputMaybe<Mancala_Monday_PlayerMoveWhereInput>;
};


export type World__QueryMancalaMondayProfileModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_ProfileOrder>;
  where?: InputMaybe<Mancala_Monday_ProfileWhereInput>;
};


export type World__QueryMancalaMondaySeedModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_SeedOrder>;
  where?: InputMaybe<Mancala_Monday_SeedWhereInput>;
};


export type World__QueryMancalaMondaySettingsModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_SettingsOrder>;
  where?: InputMaybe<Mancala_Monday_SettingsWhereInput>;
};


export type World__QueryMancalaMondayTrophyCreationModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_TrophyCreationOrder>;
  where?: InputMaybe<Mancala_Monday_TrophyCreationWhereInput>;
};


export type World__QueryMancalaMondayTrophyProgressionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Monday_TrophyProgressionOrder>;
  where?: InputMaybe<Mancala_Monday_TrophyProgressionWhereInput>;
};


export type World__QueryMancalaStoneCaptureModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_CaptureOrder>;
  where?: InputMaybe<Mancala_Stone_CaptureWhereInput>;
};


export type World__QueryMancalaStoneEndTurnModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_EndTurnOrder>;
  where?: InputMaybe<Mancala_Stone_EndTurnWhereInput>;
};


export type World__QueryMancalaStoneGameCounterModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_GameCounterOrder>;
  where?: InputMaybe<Mancala_Stone_GameCounterWhereInput>;
};


export type World__QueryMancalaStoneMancalaBoardModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_MancalaBoardOrder>;
  where?: InputMaybe<Mancala_Stone_MancalaBoardWhereInput>;
};


export type World__QueryMancalaStonePitModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_PitOrder>;
  where?: InputMaybe<Mancala_Stone_PitWhereInput>;
};


export type World__QueryMancalaStonePlayerExtraTurnModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_PlayerExtraTurnOrder>;
  where?: InputMaybe<Mancala_Stone_PlayerExtraTurnWhereInput>;
};


export type World__QueryMancalaStonePlayerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_PlayerOrder>;
  where?: InputMaybe<Mancala_Stone_PlayerWhereInput>;
};


export type World__QueryMancalaStonePlayerMoveModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_PlayerMoveOrder>;
  where?: InputMaybe<Mancala_Stone_PlayerMoveWhereInput>;
};


export type World__QueryMancalaStoneProfileModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_ProfileOrder>;
  where?: InputMaybe<Mancala_Stone_ProfileWhereInput>;
};


export type World__QueryMancalaStoneSeedModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_SeedOrder>;
  where?: InputMaybe<Mancala_Stone_SeedWhereInput>;
};


export type World__QueryMancalaStoneSettingsModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_SettingsOrder>;
  where?: InputMaybe<Mancala_Stone_SettingsWhereInput>;
};


export type World__QueryMancalaStoneTrophyCreationModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_TrophyCreationOrder>;
  where?: InputMaybe<Mancala_Stone_TrophyCreationWhereInput>;
};


export type World__QueryMancalaStoneTrophyProgressionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Mancala_Stone_TrophyProgressionOrder>;
  where?: InputMaybe<Mancala_Stone_TrophyProgressionWhereInput>;
};


export type World__QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type World__QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<World__ModelOrder>;
};


export type World__QueryTokenBalancesArgs = {
  accountAddress: Scalars['String']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryTokenTransfersArgs = {
  accountAddress: Scalars['String']['input'];
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type World__QueryTransactionArgs = {
  transactionHash: Scalars['ID']['input'];
};


export type World__QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  eventMessageUpdated: World__EventMessage;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type World__SubscriptionEventMessageUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  maxFee?: Maybe<Scalars['felt252']['output']>;
  nonce?: Maybe<Scalars['felt252']['output']>;
  senderAddress?: Maybe<Scalars['felt252']['output']>;
  signature?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
  transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<World__Transaction>;
};

export type Mancala_Monday_Capture = {
  __typename?: 'mancala_monday_Capture';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_count?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Monday_CaptureConnection = {
  __typename?: 'mancala_monday_CaptureConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_CaptureEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_CaptureEdge = {
  __typename?: 'mancala_monday_CaptureEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Capture>;
};

export type Mancala_Monday_CaptureOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_CaptureOrderField;
};

export enum Mancala_Monday_CaptureOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedCount = 'SEED_COUNT'
}

export type Mancala_Monday_CaptureWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_count?: InputMaybe<Scalars['u8']['input']>;
  seed_countEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countGT?: InputMaybe<Scalars['u8']['input']>;
  seed_countGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_countLT?: InputMaybe<Scalars['u8']['input']>;
  seed_countLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Monday_EndTurn = {
  __typename?: 'mancala_monday_EndTurn';
  current_player?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  next_player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Monday_EndTurnConnection = {
  __typename?: 'mancala_monday_EndTurnConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_EndTurnEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_EndTurnEdge = {
  __typename?: 'mancala_monday_EndTurnEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_EndTurn>;
};

export type Mancala_Monday_EndTurnOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_EndTurnOrderField;
};

export enum Mancala_Monday_EndTurnOrderField {
  CurrentPlayer = 'CURRENT_PLAYER',
  GameId = 'GAME_ID',
  NextPlayer = 'NEXT_PLAYER'
}

export type Mancala_Monday_EndTurnWhereInput = {
  current_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  next_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  next_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  next_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Monday_GameCounter = {
  __typename?: 'mancala_monday_GameCounter';
  count?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  id?: Maybe<Scalars['u32']['output']>;
};

export type Mancala_Monday_GameCounterConnection = {
  __typename?: 'mancala_monday_GameCounterConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_GameCounterEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_GameCounterEdge = {
  __typename?: 'mancala_monday_GameCounterEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_GameCounter>;
};

export type Mancala_Monday_GameCounterOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_GameCounterOrderField;
};

export enum Mancala_Monday_GameCounterOrderField {
  Count = 'COUNT',
  Id = 'ID'
}

export type Mancala_Monday_GameCounterWhereInput = {
  count?: InputMaybe<Scalars['u128']['input']>;
  countEQ?: InputMaybe<Scalars['u128']['input']>;
  countGT?: InputMaybe<Scalars['u128']['input']>;
  countGTE?: InputMaybe<Scalars['u128']['input']>;
  countIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  countLIKE?: InputMaybe<Scalars['u128']['input']>;
  countLT?: InputMaybe<Scalars['u128']['input']>;
  countLTE?: InputMaybe<Scalars['u128']['input']>;
  countNEQ?: InputMaybe<Scalars['u128']['input']>;
  countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  countNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  id?: InputMaybe<Scalars['u32']['input']>;
  idEQ?: InputMaybe<Scalars['u32']['input']>;
  idGT?: InputMaybe<Scalars['u32']['input']>;
  idGTE?: InputMaybe<Scalars['u32']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idLIKE?: InputMaybe<Scalars['u32']['input']>;
  idLT?: InputMaybe<Scalars['u32']['input']>;
  idLTE?: InputMaybe<Scalars['u32']['input']>;
  idNEQ?: InputMaybe<Scalars['u32']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u32']['input']>;
};

export type Mancala_Monday_MancalaBoard = {
  __typename?: 'mancala_monday_MancalaBoard';
  current_player?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  is_private?: Maybe<Scalars['bool']['output']>;
  last_turn_change_timestamp?: Maybe<Scalars['u64']['output']>;
  player_one?: Maybe<Scalars['ContractAddress']['output']>;
  player_two?: Maybe<Scalars['ContractAddress']['output']>;
  status?: Maybe<Scalars['Enum']['output']>;
  winner?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Monday_MancalaBoardConnection = {
  __typename?: 'mancala_monday_MancalaBoardConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_MancalaBoardEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_MancalaBoardEdge = {
  __typename?: 'mancala_monday_MancalaBoardEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_MancalaBoard>;
};

export type Mancala_Monday_MancalaBoardOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_MancalaBoardOrderField;
};

export enum Mancala_Monday_MancalaBoardOrderField {
  CurrentPlayer = 'CURRENT_PLAYER',
  GameId = 'GAME_ID',
  IsPrivate = 'IS_PRIVATE',
  LastTurnChangeTimestamp = 'LAST_TURN_CHANGE_TIMESTAMP',
  PlayerOne = 'PLAYER_ONE',
  PlayerTwo = 'PLAYER_TWO',
  Status = 'STATUS',
  Winner = 'WINNER'
}

export type Mancala_Monday_MancalaBoardWhereInput = {
  current_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  is_private?: InputMaybe<Scalars['bool']['input']>;
  last_turn_change_timestamp?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampEQ?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampGT?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampGTE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_turn_change_timestampLIKE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampLT?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampLTE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampNEQ?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_turn_change_timestampNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  player_one?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  status?: InputMaybe<Scalars['Enum']['input']>;
  winner?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Monday_Pit = {
  __typename?: 'mancala_monday_Pit';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_count?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Monday_PitConnection = {
  __typename?: 'mancala_monday_PitConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_PitEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_PitEdge = {
  __typename?: 'mancala_monday_PitEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Pit>;
};

export type Mancala_Monday_PitOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_PitOrderField;
};

export enum Mancala_Monday_PitOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedCount = 'SEED_COUNT'
}

export type Mancala_Monday_PitWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_count?: InputMaybe<Scalars['u8']['input']>;
  seed_countEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countGT?: InputMaybe<Scalars['u8']['input']>;
  seed_countGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_countLT?: InputMaybe<Scalars['u8']['input']>;
  seed_countLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Monday_Player = {
  __typename?: 'mancala_monday_Player';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  len_pits?: Maybe<Scalars['u8']['output']>;
  restart_requested?: Maybe<Scalars['bool']['output']>;
};

export type Mancala_Monday_PlayerConnection = {
  __typename?: 'mancala_monday_PlayerConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_PlayerEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_PlayerEdge = {
  __typename?: 'mancala_monday_PlayerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Player>;
};

export type Mancala_Monday_PlayerExtraTurn = {
  __typename?: 'mancala_monday_PlayerExtraTurn';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Monday_PlayerExtraTurnConnection = {
  __typename?: 'mancala_monday_PlayerExtraTurnConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_PlayerExtraTurnEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_PlayerExtraTurnEdge = {
  __typename?: 'mancala_monday_PlayerExtraTurnEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_PlayerExtraTurn>;
};

export type Mancala_Monday_PlayerExtraTurnOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_PlayerExtraTurnOrderField;
};

export enum Mancala_Monday_PlayerExtraTurnOrderField {
  GameId = 'GAME_ID',
  Player = 'PLAYER'
}

export type Mancala_Monday_PlayerExtraTurnWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Monday_PlayerMove = {
  __typename?: 'mancala_monday_PlayerMove';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  seed_number?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Monday_PlayerMoveConnection = {
  __typename?: 'mancala_monday_PlayerMoveConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_PlayerMoveEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_PlayerMoveEdge = {
  __typename?: 'mancala_monday_PlayerMoveEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_PlayerMove>;
};

export type Mancala_Monday_PlayerMoveOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_PlayerMoveOrderField;
};

export enum Mancala_Monday_PlayerMoveOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  SeedNumber = 'SEED_NUMBER'
}

export type Mancala_Monday_PlayerMoveWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_number?: InputMaybe<Scalars['u8']['input']>;
  seed_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Monday_PlayerOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_PlayerOrderField;
};

export enum Mancala_Monday_PlayerOrderField {
  Address = 'ADDRESS',
  GameId = 'GAME_ID',
  LenPits = 'LEN_PITS',
  RestartRequested = 'RESTART_REQUESTED'
}

export type Mancala_Monday_PlayerWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  len_pits?: InputMaybe<Scalars['u8']['input']>;
  len_pitsEQ?: InputMaybe<Scalars['u8']['input']>;
  len_pitsGT?: InputMaybe<Scalars['u8']['input']>;
  len_pitsGTE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  len_pitsLIKE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsLT?: InputMaybe<Scalars['u8']['input']>;
  len_pitsLTE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsNEQ?: InputMaybe<Scalars['u8']['input']>;
  len_pitsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  len_pitsNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  restart_requested?: InputMaybe<Scalars['bool']['input']>;
};

export type Mancala_Monday_Profile = {
  __typename?: 'mancala_monday_Profile';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  creation_time?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  is_initialized?: Maybe<Scalars['bool']['output']>;
  name?: Maybe<Scalars['felt252']['output']>;
  profile_uri?: Maybe<Scalars['ByteArray']['output']>;
};

export type Mancala_Monday_ProfileConnection = {
  __typename?: 'mancala_monday_ProfileConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_ProfileEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_ProfileEdge = {
  __typename?: 'mancala_monday_ProfileEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Profile>;
};

export type Mancala_Monday_ProfileOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_ProfileOrderField;
};

export enum Mancala_Monday_ProfileOrderField {
  Address = 'ADDRESS',
  CreationTime = 'CREATION_TIME',
  IsInitialized = 'IS_INITIALIZED',
  Name = 'NAME',
  ProfileUri = 'PROFILE_URI'
}

export type Mancala_Monday_ProfileWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  creation_time?: InputMaybe<Scalars['u64']['input']>;
  creation_timeEQ?: InputMaybe<Scalars['u64']['input']>;
  creation_timeGT?: InputMaybe<Scalars['u64']['input']>;
  creation_timeGTE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  creation_timeLIKE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeLT?: InputMaybe<Scalars['u64']['input']>;
  creation_timeLTE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeNEQ?: InputMaybe<Scalars['u64']['input']>;
  creation_timeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  creation_timeNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  is_initialized?: InputMaybe<Scalars['bool']['input']>;
  name?: InputMaybe<Scalars['felt252']['input']>;
  nameEQ?: InputMaybe<Scalars['felt252']['input']>;
  nameGT?: InputMaybe<Scalars['felt252']['input']>;
  nameGTE?: InputMaybe<Scalars['felt252']['input']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  nameLIKE?: InputMaybe<Scalars['felt252']['input']>;
  nameLT?: InputMaybe<Scalars['felt252']['input']>;
  nameLTE?: InputMaybe<Scalars['felt252']['input']>;
  nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  profile_uri?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriGT?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  profile_uriLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriLT?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  profile_uriNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
};

export type Mancala_Monday_Seed = {
  __typename?: 'mancala_monday_Seed';
  color?: Maybe<Scalars['Enum']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_id?: Maybe<Scalars['u128']['output']>;
  seed_number?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Monday_SeedConnection = {
  __typename?: 'mancala_monday_SeedConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_SeedEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_SeedEdge = {
  __typename?: 'mancala_monday_SeedEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Seed>;
};

export type Mancala_Monday_SeedOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_SeedOrderField;
};

export enum Mancala_Monday_SeedOrderField {
  Color = 'COLOR',
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedId = 'SEED_ID',
  SeedNumber = 'SEED_NUMBER'
}

export type Mancala_Monday_SeedWhereInput = {
  color?: InputMaybe<Scalars['Enum']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_id?: InputMaybe<Scalars['u128']['input']>;
  seed_idEQ?: InputMaybe<Scalars['u128']['input']>;
  seed_idGT?: InputMaybe<Scalars['u128']['input']>;
  seed_idGTE?: InputMaybe<Scalars['u128']['input']>;
  seed_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  seed_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  seed_idLT?: InputMaybe<Scalars['u128']['input']>;
  seed_idLTE?: InputMaybe<Scalars['u128']['input']>;
  seed_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  seed_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  seed_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  seed_number?: InputMaybe<Scalars['u8']['input']>;
  seed_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Monday_Settings = {
  __typename?: 'mancala_monday_Settings';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  gate_keeper_address?: Maybe<Scalars['ContractAddress']['output']>;
  id?: Maybe<Scalars['u8']['output']>;
  mancala_pass_address?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Monday_SettingsConnection = {
  __typename?: 'mancala_monday_SettingsConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_SettingsEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_SettingsEdge = {
  __typename?: 'mancala_monday_SettingsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_Settings>;
};

export type Mancala_Monday_SettingsOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_SettingsOrderField;
};

export enum Mancala_Monday_SettingsOrderField {
  GateKeeperAddress = 'GATE_KEEPER_ADDRESS',
  Id = 'ID',
  MancalaPassAddress = 'MANCALA_PASS_ADDRESS'
}

export type Mancala_Monday_SettingsWhereInput = {
  gate_keeper_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  gate_keeper_addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  gate_keeper_addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  id?: InputMaybe<Scalars['u8']['input']>;
  idEQ?: InputMaybe<Scalars['u8']['input']>;
  idGT?: InputMaybe<Scalars['u8']['input']>;
  idGTE?: InputMaybe<Scalars['u8']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  idLIKE?: InputMaybe<Scalars['u8']['input']>;
  idLT?: InputMaybe<Scalars['u8']['input']>;
  idLTE?: InputMaybe<Scalars['u8']['input']>;
  idNEQ?: InputMaybe<Scalars['u8']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  mancala_pass_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  mancala_pass_addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  mancala_pass_addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Monday_Task = {
  __typename?: 'mancala_monday_Task';
  description?: Maybe<Scalars['ByteArray']['output']>;
  id?: Maybe<Scalars['felt252']['output']>;
  total?: Maybe<Scalars['u32']['output']>;
};

export type Mancala_Monday_TrophyCreation = {
  __typename?: 'mancala_monday_TrophyCreation';
  data?: Maybe<Scalars['ByteArray']['output']>;
  description?: Maybe<Scalars['ByteArray']['output']>;
  end?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  group?: Maybe<Scalars['felt252']['output']>;
  hidden?: Maybe<Scalars['bool']['output']>;
  icon?: Maybe<Scalars['felt252']['output']>;
  id?: Maybe<Scalars['felt252']['output']>;
  index?: Maybe<Scalars['u8']['output']>;
  points?: Maybe<Scalars['u16']['output']>;
  start?: Maybe<Scalars['u64']['output']>;
  tasks?: Maybe<Array<Maybe<Mancala_Monday_Task>>>;
  title?: Maybe<Scalars['felt252']['output']>;
};

export type Mancala_Monday_TrophyCreationConnection = {
  __typename?: 'mancala_monday_TrophyCreationConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_TrophyCreationEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_TrophyCreationEdge = {
  __typename?: 'mancala_monday_TrophyCreationEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_TrophyCreation>;
};

export type Mancala_Monday_TrophyCreationOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_TrophyCreationOrderField;
};

export enum Mancala_Monday_TrophyCreationOrderField {
  Data = 'DATA',
  Description = 'DESCRIPTION',
  End = 'END',
  Group = 'GROUP',
  Hidden = 'HIDDEN',
  Icon = 'ICON',
  Id = 'ID',
  Index = 'INDEX',
  Points = 'POINTS',
  Start = 'START',
  Tasks = 'TASKS',
  Title = 'TITLE'
}

export type Mancala_Monday_TrophyCreationWhereInput = {
  data?: InputMaybe<Scalars['ByteArray']['input']>;
  dataEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  dataGT?: InputMaybe<Scalars['ByteArray']['input']>;
  dataGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  dataLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataLT?: InputMaybe<Scalars['ByteArray']['input']>;
  dataLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  dataNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  dataNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  description?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionGT?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  descriptionLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionLT?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  descriptionNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  end?: InputMaybe<Scalars['u64']['input']>;
  endEQ?: InputMaybe<Scalars['u64']['input']>;
  endGT?: InputMaybe<Scalars['u64']['input']>;
  endGTE?: InputMaybe<Scalars['u64']['input']>;
  endIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  endLIKE?: InputMaybe<Scalars['u64']['input']>;
  endLT?: InputMaybe<Scalars['u64']['input']>;
  endLTE?: InputMaybe<Scalars['u64']['input']>;
  endNEQ?: InputMaybe<Scalars['u64']['input']>;
  endNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  endNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  group?: InputMaybe<Scalars['felt252']['input']>;
  groupEQ?: InputMaybe<Scalars['felt252']['input']>;
  groupGT?: InputMaybe<Scalars['felt252']['input']>;
  groupGTE?: InputMaybe<Scalars['felt252']['input']>;
  groupIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  groupLIKE?: InputMaybe<Scalars['felt252']['input']>;
  groupLT?: InputMaybe<Scalars['felt252']['input']>;
  groupLTE?: InputMaybe<Scalars['felt252']['input']>;
  groupNEQ?: InputMaybe<Scalars['felt252']['input']>;
  groupNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  groupNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  hidden?: InputMaybe<Scalars['bool']['input']>;
  icon?: InputMaybe<Scalars['felt252']['input']>;
  iconEQ?: InputMaybe<Scalars['felt252']['input']>;
  iconGT?: InputMaybe<Scalars['felt252']['input']>;
  iconGTE?: InputMaybe<Scalars['felt252']['input']>;
  iconIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  iconLIKE?: InputMaybe<Scalars['felt252']['input']>;
  iconLT?: InputMaybe<Scalars['felt252']['input']>;
  iconLTE?: InputMaybe<Scalars['felt252']['input']>;
  iconNEQ?: InputMaybe<Scalars['felt252']['input']>;
  iconNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  iconNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  id?: InputMaybe<Scalars['felt252']['input']>;
  idEQ?: InputMaybe<Scalars['felt252']['input']>;
  idGT?: InputMaybe<Scalars['felt252']['input']>;
  idGTE?: InputMaybe<Scalars['felt252']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  idLT?: InputMaybe<Scalars['felt252']['input']>;
  idLTE?: InputMaybe<Scalars['felt252']['input']>;
  idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  index?: InputMaybe<Scalars['u8']['input']>;
  indexEQ?: InputMaybe<Scalars['u8']['input']>;
  indexGT?: InputMaybe<Scalars['u8']['input']>;
  indexGTE?: InputMaybe<Scalars['u8']['input']>;
  indexIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  indexLIKE?: InputMaybe<Scalars['u8']['input']>;
  indexLT?: InputMaybe<Scalars['u8']['input']>;
  indexLTE?: InputMaybe<Scalars['u8']['input']>;
  indexNEQ?: InputMaybe<Scalars['u8']['input']>;
  indexNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  indexNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  points?: InputMaybe<Scalars['u16']['input']>;
  pointsEQ?: InputMaybe<Scalars['u16']['input']>;
  pointsGT?: InputMaybe<Scalars['u16']['input']>;
  pointsGTE?: InputMaybe<Scalars['u16']['input']>;
  pointsIN?: InputMaybe<Array<InputMaybe<Scalars['u16']['input']>>>;
  pointsLIKE?: InputMaybe<Scalars['u16']['input']>;
  pointsLT?: InputMaybe<Scalars['u16']['input']>;
  pointsLTE?: InputMaybe<Scalars['u16']['input']>;
  pointsNEQ?: InputMaybe<Scalars['u16']['input']>;
  pointsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']['input']>>>;
  pointsNOTLIKE?: InputMaybe<Scalars['u16']['input']>;
  start?: InputMaybe<Scalars['u64']['input']>;
  startEQ?: InputMaybe<Scalars['u64']['input']>;
  startGT?: InputMaybe<Scalars['u64']['input']>;
  startGTE?: InputMaybe<Scalars['u64']['input']>;
  startIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  startLIKE?: InputMaybe<Scalars['u64']['input']>;
  startLT?: InputMaybe<Scalars['u64']['input']>;
  startLTE?: InputMaybe<Scalars['u64']['input']>;
  startNEQ?: InputMaybe<Scalars['u64']['input']>;
  startNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  startNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  title?: InputMaybe<Scalars['felt252']['input']>;
  titleEQ?: InputMaybe<Scalars['felt252']['input']>;
  titleGT?: InputMaybe<Scalars['felt252']['input']>;
  titleGTE?: InputMaybe<Scalars['felt252']['input']>;
  titleIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  titleLIKE?: InputMaybe<Scalars['felt252']['input']>;
  titleLT?: InputMaybe<Scalars['felt252']['input']>;
  titleLTE?: InputMaybe<Scalars['felt252']['input']>;
  titleNEQ?: InputMaybe<Scalars['felt252']['input']>;
  titleNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  titleNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
};

export type Mancala_Monday_TrophyProgression = {
  __typename?: 'mancala_monday_TrophyProgression';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  player_id?: Maybe<Scalars['felt252']['output']>;
  task_id?: Maybe<Scalars['felt252']['output']>;
  time?: Maybe<Scalars['u64']['output']>;
};

export type Mancala_Monday_TrophyProgressionConnection = {
  __typename?: 'mancala_monday_TrophyProgressionConnection';
  edges?: Maybe<Array<Maybe<Mancala_Monday_TrophyProgressionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Monday_TrophyProgressionEdge = {
  __typename?: 'mancala_monday_TrophyProgressionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Monday_TrophyProgression>;
};

export type Mancala_Monday_TrophyProgressionOrder = {
  direction: OrderDirection;
  field: Mancala_Monday_TrophyProgressionOrderField;
};

export enum Mancala_Monday_TrophyProgressionOrderField {
  Count = 'COUNT',
  PlayerId = 'PLAYER_ID',
  TaskId = 'TASK_ID',
  Time = 'TIME'
}

export type Mancala_Monday_TrophyProgressionWhereInput = {
  count?: InputMaybe<Scalars['u32']['input']>;
  countEQ?: InputMaybe<Scalars['u32']['input']>;
  countGT?: InputMaybe<Scalars['u32']['input']>;
  countGTE?: InputMaybe<Scalars['u32']['input']>;
  countIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  countLIKE?: InputMaybe<Scalars['u32']['input']>;
  countLT?: InputMaybe<Scalars['u32']['input']>;
  countLTE?: InputMaybe<Scalars['u32']['input']>;
  countNEQ?: InputMaybe<Scalars['u32']['input']>;
  countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  countNOTLIKE?: InputMaybe<Scalars['u32']['input']>;
  player_id?: InputMaybe<Scalars['felt252']['input']>;
  player_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_idGT?: InputMaybe<Scalars['felt252']['input']>;
  player_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  player_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  player_idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  player_idLT?: InputMaybe<Scalars['felt252']['input']>;
  player_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  player_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  player_idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  task_id?: InputMaybe<Scalars['felt252']['input']>;
  task_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  task_idGT?: InputMaybe<Scalars['felt252']['input']>;
  task_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  task_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  task_idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  task_idLT?: InputMaybe<Scalars['felt252']['input']>;
  task_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  task_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  task_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  task_idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  time?: InputMaybe<Scalars['u64']['input']>;
  timeEQ?: InputMaybe<Scalars['u64']['input']>;
  timeGT?: InputMaybe<Scalars['u64']['input']>;
  timeGTE?: InputMaybe<Scalars['u64']['input']>;
  timeIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  timeLIKE?: InputMaybe<Scalars['u64']['input']>;
  timeLT?: InputMaybe<Scalars['u64']['input']>;
  timeLTE?: InputMaybe<Scalars['u64']['input']>;
  timeNEQ?: InputMaybe<Scalars['u64']['input']>;
  timeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  timeNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
};

export type Mancala_Stone_Capture = {
  __typename?: 'mancala_stone_Capture';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_count?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Stone_CaptureConnection = {
  __typename?: 'mancala_stone_CaptureConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_CaptureEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_CaptureEdge = {
  __typename?: 'mancala_stone_CaptureEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Capture>;
};

export type Mancala_Stone_CaptureOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_CaptureOrderField;
};

export enum Mancala_Stone_CaptureOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedCount = 'SEED_COUNT'
}

export type Mancala_Stone_CaptureWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_count?: InputMaybe<Scalars['u8']['input']>;
  seed_countEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countGT?: InputMaybe<Scalars['u8']['input']>;
  seed_countGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_countLT?: InputMaybe<Scalars['u8']['input']>;
  seed_countLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Stone_EndTurn = {
  __typename?: 'mancala_stone_EndTurn';
  current_player?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  next_player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Stone_EndTurnConnection = {
  __typename?: 'mancala_stone_EndTurnConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_EndTurnEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_EndTurnEdge = {
  __typename?: 'mancala_stone_EndTurnEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_EndTurn>;
};

export type Mancala_Stone_EndTurnOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_EndTurnOrderField;
};

export enum Mancala_Stone_EndTurnOrderField {
  CurrentPlayer = 'CURRENT_PLAYER',
  GameId = 'GAME_ID',
  NextPlayer = 'NEXT_PLAYER'
}

export type Mancala_Stone_EndTurnWhereInput = {
  current_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  next_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  next_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  next_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  next_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Stone_GameCounter = {
  __typename?: 'mancala_stone_GameCounter';
  count?: Maybe<Scalars['u128']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  id?: Maybe<Scalars['u32']['output']>;
};

export type Mancala_Stone_GameCounterConnection = {
  __typename?: 'mancala_stone_GameCounterConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_GameCounterEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_GameCounterEdge = {
  __typename?: 'mancala_stone_GameCounterEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_GameCounter>;
};

export type Mancala_Stone_GameCounterOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_GameCounterOrderField;
};

export enum Mancala_Stone_GameCounterOrderField {
  Count = 'COUNT',
  Id = 'ID'
}

export type Mancala_Stone_GameCounterWhereInput = {
  count?: InputMaybe<Scalars['u128']['input']>;
  countEQ?: InputMaybe<Scalars['u128']['input']>;
  countGT?: InputMaybe<Scalars['u128']['input']>;
  countGTE?: InputMaybe<Scalars['u128']['input']>;
  countIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  countLIKE?: InputMaybe<Scalars['u128']['input']>;
  countLT?: InputMaybe<Scalars['u128']['input']>;
  countLTE?: InputMaybe<Scalars['u128']['input']>;
  countNEQ?: InputMaybe<Scalars['u128']['input']>;
  countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  countNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  id?: InputMaybe<Scalars['u32']['input']>;
  idEQ?: InputMaybe<Scalars['u32']['input']>;
  idGT?: InputMaybe<Scalars['u32']['input']>;
  idGTE?: InputMaybe<Scalars['u32']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idLIKE?: InputMaybe<Scalars['u32']['input']>;
  idLT?: InputMaybe<Scalars['u32']['input']>;
  idLTE?: InputMaybe<Scalars['u32']['input']>;
  idNEQ?: InputMaybe<Scalars['u32']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u32']['input']>;
};

export type Mancala_Stone_MancalaBoard = {
  __typename?: 'mancala_stone_MancalaBoard';
  current_player?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  is_private?: Maybe<Scalars['bool']['output']>;
  last_turn_change_timestamp?: Maybe<Scalars['u64']['output']>;
  player_one?: Maybe<Scalars['ContractAddress']['output']>;
  player_two?: Maybe<Scalars['ContractAddress']['output']>;
  status?: Maybe<Scalars['Enum']['output']>;
  winner?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Stone_MancalaBoardConnection = {
  __typename?: 'mancala_stone_MancalaBoardConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_MancalaBoardEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_MancalaBoardEdge = {
  __typename?: 'mancala_stone_MancalaBoardEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_MancalaBoard>;
};

export type Mancala_Stone_MancalaBoardOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_MancalaBoardOrderField;
};

export enum Mancala_Stone_MancalaBoardOrderField {
  CurrentPlayer = 'CURRENT_PLAYER',
  GameId = 'GAME_ID',
  IsPrivate = 'IS_PRIVATE',
  LastTurnChangeTimestamp = 'LAST_TURN_CHANGE_TIMESTAMP',
  PlayerOne = 'PLAYER_ONE',
  PlayerTwo = 'PLAYER_TWO',
  Status = 'STATUS',
  Winner = 'WINNER'
}

export type Mancala_Stone_MancalaBoardWhereInput = {
  current_player?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  current_playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  current_playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  is_private?: InputMaybe<Scalars['bool']['input']>;
  last_turn_change_timestamp?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampEQ?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampGT?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampGTE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_turn_change_timestampLIKE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampLT?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampLTE?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampNEQ?: InputMaybe<Scalars['u64']['input']>;
  last_turn_change_timestampNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  last_turn_change_timestampNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  player_one?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_oneNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_oneNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_two?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  player_twoNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  player_twoNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  status?: InputMaybe<Scalars['Enum']['input']>;
  winner?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  winnerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  winnerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Stone_Pit = {
  __typename?: 'mancala_stone_Pit';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_count?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Stone_PitConnection = {
  __typename?: 'mancala_stone_PitConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_PitEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_PitEdge = {
  __typename?: 'mancala_stone_PitEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Pit>;
};

export type Mancala_Stone_PitOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_PitOrderField;
};

export enum Mancala_Stone_PitOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedCount = 'SEED_COUNT'
}

export type Mancala_Stone_PitWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_count?: InputMaybe<Scalars['u8']['input']>;
  seed_countEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countGT?: InputMaybe<Scalars['u8']['input']>;
  seed_countGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_countLT?: InputMaybe<Scalars['u8']['input']>;
  seed_countLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_countNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_countNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Stone_Player = {
  __typename?: 'mancala_stone_Player';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  len_pits?: Maybe<Scalars['u8']['output']>;
  restart_requested?: Maybe<Scalars['bool']['output']>;
};

export type Mancala_Stone_PlayerConnection = {
  __typename?: 'mancala_stone_PlayerConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_PlayerEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_PlayerEdge = {
  __typename?: 'mancala_stone_PlayerEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Player>;
};

export type Mancala_Stone_PlayerExtraTurn = {
  __typename?: 'mancala_stone_PlayerExtraTurn';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Stone_PlayerExtraTurnConnection = {
  __typename?: 'mancala_stone_PlayerExtraTurnConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_PlayerExtraTurnEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_PlayerExtraTurnEdge = {
  __typename?: 'mancala_stone_PlayerExtraTurnEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_PlayerExtraTurn>;
};

export type Mancala_Stone_PlayerExtraTurnOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_PlayerExtraTurnOrderField;
};

export enum Mancala_Stone_PlayerExtraTurnOrderField {
  GameId = 'GAME_ID',
  Player = 'PLAYER'
}

export type Mancala_Stone_PlayerExtraTurnWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Stone_PlayerMove = {
  __typename?: 'mancala_stone_PlayerMove';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  seed_number?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Stone_PlayerMoveConnection = {
  __typename?: 'mancala_stone_PlayerMoveConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_PlayerMoveEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_PlayerMoveEdge = {
  __typename?: 'mancala_stone_PlayerMoveEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_PlayerMove>;
};

export type Mancala_Stone_PlayerMoveOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_PlayerMoveOrderField;
};

export enum Mancala_Stone_PlayerMoveOrderField {
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  SeedNumber = 'SEED_NUMBER'
}

export type Mancala_Stone_PlayerMoveWhereInput = {
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_number?: InputMaybe<Scalars['u8']['input']>;
  seed_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Stone_PlayerOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_PlayerOrderField;
};

export enum Mancala_Stone_PlayerOrderField {
  Address = 'ADDRESS',
  GameId = 'GAME_ID',
  LenPits = 'LEN_PITS',
  RestartRequested = 'RESTART_REQUESTED'
}

export type Mancala_Stone_PlayerWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  len_pits?: InputMaybe<Scalars['u8']['input']>;
  len_pitsEQ?: InputMaybe<Scalars['u8']['input']>;
  len_pitsGT?: InputMaybe<Scalars['u8']['input']>;
  len_pitsGTE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  len_pitsLIKE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsLT?: InputMaybe<Scalars['u8']['input']>;
  len_pitsLTE?: InputMaybe<Scalars['u8']['input']>;
  len_pitsNEQ?: InputMaybe<Scalars['u8']['input']>;
  len_pitsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  len_pitsNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  restart_requested?: InputMaybe<Scalars['bool']['input']>;
};

export type Mancala_Stone_Profile = {
  __typename?: 'mancala_stone_Profile';
  address?: Maybe<Scalars['ContractAddress']['output']>;
  creation_time?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  is_initialized?: Maybe<Scalars['bool']['output']>;
  name?: Maybe<Scalars['felt252']['output']>;
  profile_uri?: Maybe<Scalars['ByteArray']['output']>;
};

export type Mancala_Stone_ProfileConnection = {
  __typename?: 'mancala_stone_ProfileConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_ProfileEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_ProfileEdge = {
  __typename?: 'mancala_stone_ProfileEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Profile>;
};

export type Mancala_Stone_ProfileOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_ProfileOrderField;
};

export enum Mancala_Stone_ProfileOrderField {
  Address = 'ADDRESS',
  CreationTime = 'CREATION_TIME',
  IsInitialized = 'IS_INITIALIZED',
  Name = 'NAME',
  ProfileUri = 'PROFILE_URI'
}

export type Mancala_Stone_ProfileWhereInput = {
  address?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  creation_time?: InputMaybe<Scalars['u64']['input']>;
  creation_timeEQ?: InputMaybe<Scalars['u64']['input']>;
  creation_timeGT?: InputMaybe<Scalars['u64']['input']>;
  creation_timeGTE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  creation_timeLIKE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeLT?: InputMaybe<Scalars['u64']['input']>;
  creation_timeLTE?: InputMaybe<Scalars['u64']['input']>;
  creation_timeNEQ?: InputMaybe<Scalars['u64']['input']>;
  creation_timeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  creation_timeNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  is_initialized?: InputMaybe<Scalars['bool']['input']>;
  name?: InputMaybe<Scalars['felt252']['input']>;
  nameEQ?: InputMaybe<Scalars['felt252']['input']>;
  nameGT?: InputMaybe<Scalars['felt252']['input']>;
  nameGTE?: InputMaybe<Scalars['felt252']['input']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  nameLIKE?: InputMaybe<Scalars['felt252']['input']>;
  nameLT?: InputMaybe<Scalars['felt252']['input']>;
  nameLTE?: InputMaybe<Scalars['felt252']['input']>;
  nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  profile_uri?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriGT?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  profile_uriLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriLT?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  profile_uriNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  profile_uriNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
};

export type Mancala_Stone_Seed = {
  __typename?: 'mancala_stone_Seed';
  color?: Maybe<Scalars['Enum']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  game_id?: Maybe<Scalars['u128']['output']>;
  pit_number?: Maybe<Scalars['u8']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  seed_id?: Maybe<Scalars['u128']['output']>;
  seed_number?: Maybe<Scalars['u8']['output']>;
};

export type Mancala_Stone_SeedConnection = {
  __typename?: 'mancala_stone_SeedConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_SeedEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_SeedEdge = {
  __typename?: 'mancala_stone_SeedEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Seed>;
};

export type Mancala_Stone_SeedOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_SeedOrderField;
};

export enum Mancala_Stone_SeedOrderField {
  Color = 'COLOR',
  GameId = 'GAME_ID',
  PitNumber = 'PIT_NUMBER',
  Player = 'PLAYER',
  SeedId = 'SEED_ID',
  SeedNumber = 'SEED_NUMBER'
}

export type Mancala_Stone_SeedWhereInput = {
  color?: InputMaybe<Scalars['Enum']['input']>;
  game_id?: InputMaybe<Scalars['u128']['input']>;
  game_idEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idGT?: InputMaybe<Scalars['u128']['input']>;
  game_idGTE?: InputMaybe<Scalars['u128']['input']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  game_idLT?: InputMaybe<Scalars['u128']['input']>;
  game_idLTE?: InputMaybe<Scalars['u128']['input']>;
  game_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  pit_number?: InputMaybe<Scalars['u8']['input']>;
  pit_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLT?: InputMaybe<Scalars['u8']['input']>;
  pit_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  pit_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  pit_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  playerNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  seed_id?: InputMaybe<Scalars['u128']['input']>;
  seed_idEQ?: InputMaybe<Scalars['u128']['input']>;
  seed_idGT?: InputMaybe<Scalars['u128']['input']>;
  seed_idGTE?: InputMaybe<Scalars['u128']['input']>;
  seed_idIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  seed_idLIKE?: InputMaybe<Scalars['u128']['input']>;
  seed_idLT?: InputMaybe<Scalars['u128']['input']>;
  seed_idLTE?: InputMaybe<Scalars['u128']['input']>;
  seed_idNEQ?: InputMaybe<Scalars['u128']['input']>;
  seed_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']['input']>>>;
  seed_idNOTLIKE?: InputMaybe<Scalars['u128']['input']>;
  seed_number?: InputMaybe<Scalars['u8']['input']>;
  seed_numberEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberGTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberLIKE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLT?: InputMaybe<Scalars['u8']['input']>;
  seed_numberLTE?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNEQ?: InputMaybe<Scalars['u8']['input']>;
  seed_numberNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  seed_numberNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
};

export type Mancala_Stone_Settings = {
  __typename?: 'mancala_stone_Settings';
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  gate_keeper_address?: Maybe<Scalars['ContractAddress']['output']>;
  id?: Maybe<Scalars['u8']['output']>;
  mancala_pass_address?: Maybe<Scalars['ContractAddress']['output']>;
};

export type Mancala_Stone_SettingsConnection = {
  __typename?: 'mancala_stone_SettingsConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_SettingsEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_SettingsEdge = {
  __typename?: 'mancala_stone_SettingsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_Settings>;
};

export type Mancala_Stone_SettingsOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_SettingsOrderField;
};

export enum Mancala_Stone_SettingsOrderField {
  GateKeeperAddress = 'GATE_KEEPER_ADDRESS',
  Id = 'ID',
  MancalaPassAddress = 'MANCALA_PASS_ADDRESS'
}

export type Mancala_Stone_SettingsWhereInput = {
  gate_keeper_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  gate_keeper_addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  gate_keeper_addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  gate_keeper_addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  id?: InputMaybe<Scalars['u8']['input']>;
  idEQ?: InputMaybe<Scalars['u8']['input']>;
  idGT?: InputMaybe<Scalars['u8']['input']>;
  idGTE?: InputMaybe<Scalars['u8']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  idLIKE?: InputMaybe<Scalars['u8']['input']>;
  idLT?: InputMaybe<Scalars['u8']['input']>;
  idLTE?: InputMaybe<Scalars['u8']['input']>;
  idNEQ?: InputMaybe<Scalars['u8']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  mancala_pass_address?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  mancala_pass_addressLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  mancala_pass_addressNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']['input']>>>;
  mancala_pass_addressNOTLIKE?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Mancala_Stone_Task = {
  __typename?: 'mancala_stone_Task';
  description?: Maybe<Scalars['ByteArray']['output']>;
  id?: Maybe<Scalars['felt252']['output']>;
  total?: Maybe<Scalars['u32']['output']>;
};

export type Mancala_Stone_TrophyCreation = {
  __typename?: 'mancala_stone_TrophyCreation';
  data?: Maybe<Scalars['ByteArray']['output']>;
  description?: Maybe<Scalars['ByteArray']['output']>;
  end?: Maybe<Scalars['u64']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  group?: Maybe<Scalars['felt252']['output']>;
  hidden?: Maybe<Scalars['bool']['output']>;
  icon?: Maybe<Scalars['felt252']['output']>;
  id?: Maybe<Scalars['felt252']['output']>;
  index?: Maybe<Scalars['u8']['output']>;
  points?: Maybe<Scalars['u16']['output']>;
  start?: Maybe<Scalars['u64']['output']>;
  tasks?: Maybe<Array<Maybe<Mancala_Stone_Task>>>;
  title?: Maybe<Scalars['felt252']['output']>;
};

export type Mancala_Stone_TrophyCreationConnection = {
  __typename?: 'mancala_stone_TrophyCreationConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_TrophyCreationEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_TrophyCreationEdge = {
  __typename?: 'mancala_stone_TrophyCreationEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_TrophyCreation>;
};

export type Mancala_Stone_TrophyCreationOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_TrophyCreationOrderField;
};

export enum Mancala_Stone_TrophyCreationOrderField {
  Data = 'DATA',
  Description = 'DESCRIPTION',
  End = 'END',
  Group = 'GROUP',
  Hidden = 'HIDDEN',
  Icon = 'ICON',
  Id = 'ID',
  Index = 'INDEX',
  Points = 'POINTS',
  Start = 'START',
  Tasks = 'TASKS',
  Title = 'TITLE'
}

export type Mancala_Stone_TrophyCreationWhereInput = {
  data?: InputMaybe<Scalars['ByteArray']['input']>;
  dataEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  dataGT?: InputMaybe<Scalars['ByteArray']['input']>;
  dataGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  dataLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataLT?: InputMaybe<Scalars['ByteArray']['input']>;
  dataLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  dataNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  dataNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  dataNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  description?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionGT?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionGTE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  descriptionLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionLT?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionLTE?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionNEQ?: InputMaybe<Scalars['ByteArray']['input']>;
  descriptionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ByteArray']['input']>>>;
  descriptionNOTLIKE?: InputMaybe<Scalars['ByteArray']['input']>;
  end?: InputMaybe<Scalars['u64']['input']>;
  endEQ?: InputMaybe<Scalars['u64']['input']>;
  endGT?: InputMaybe<Scalars['u64']['input']>;
  endGTE?: InputMaybe<Scalars['u64']['input']>;
  endIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  endLIKE?: InputMaybe<Scalars['u64']['input']>;
  endLT?: InputMaybe<Scalars['u64']['input']>;
  endLTE?: InputMaybe<Scalars['u64']['input']>;
  endNEQ?: InputMaybe<Scalars['u64']['input']>;
  endNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  endNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  group?: InputMaybe<Scalars['felt252']['input']>;
  groupEQ?: InputMaybe<Scalars['felt252']['input']>;
  groupGT?: InputMaybe<Scalars['felt252']['input']>;
  groupGTE?: InputMaybe<Scalars['felt252']['input']>;
  groupIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  groupLIKE?: InputMaybe<Scalars['felt252']['input']>;
  groupLT?: InputMaybe<Scalars['felt252']['input']>;
  groupLTE?: InputMaybe<Scalars['felt252']['input']>;
  groupNEQ?: InputMaybe<Scalars['felt252']['input']>;
  groupNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  groupNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  hidden?: InputMaybe<Scalars['bool']['input']>;
  icon?: InputMaybe<Scalars['felt252']['input']>;
  iconEQ?: InputMaybe<Scalars['felt252']['input']>;
  iconGT?: InputMaybe<Scalars['felt252']['input']>;
  iconGTE?: InputMaybe<Scalars['felt252']['input']>;
  iconIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  iconLIKE?: InputMaybe<Scalars['felt252']['input']>;
  iconLT?: InputMaybe<Scalars['felt252']['input']>;
  iconLTE?: InputMaybe<Scalars['felt252']['input']>;
  iconNEQ?: InputMaybe<Scalars['felt252']['input']>;
  iconNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  iconNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  id?: InputMaybe<Scalars['felt252']['input']>;
  idEQ?: InputMaybe<Scalars['felt252']['input']>;
  idGT?: InputMaybe<Scalars['felt252']['input']>;
  idGTE?: InputMaybe<Scalars['felt252']['input']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  idLT?: InputMaybe<Scalars['felt252']['input']>;
  idLTE?: InputMaybe<Scalars['felt252']['input']>;
  idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  index?: InputMaybe<Scalars['u8']['input']>;
  indexEQ?: InputMaybe<Scalars['u8']['input']>;
  indexGT?: InputMaybe<Scalars['u8']['input']>;
  indexGTE?: InputMaybe<Scalars['u8']['input']>;
  indexIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  indexLIKE?: InputMaybe<Scalars['u8']['input']>;
  indexLT?: InputMaybe<Scalars['u8']['input']>;
  indexLTE?: InputMaybe<Scalars['u8']['input']>;
  indexNEQ?: InputMaybe<Scalars['u8']['input']>;
  indexNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']['input']>>>;
  indexNOTLIKE?: InputMaybe<Scalars['u8']['input']>;
  points?: InputMaybe<Scalars['u16']['input']>;
  pointsEQ?: InputMaybe<Scalars['u16']['input']>;
  pointsGT?: InputMaybe<Scalars['u16']['input']>;
  pointsGTE?: InputMaybe<Scalars['u16']['input']>;
  pointsIN?: InputMaybe<Array<InputMaybe<Scalars['u16']['input']>>>;
  pointsLIKE?: InputMaybe<Scalars['u16']['input']>;
  pointsLT?: InputMaybe<Scalars['u16']['input']>;
  pointsLTE?: InputMaybe<Scalars['u16']['input']>;
  pointsNEQ?: InputMaybe<Scalars['u16']['input']>;
  pointsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']['input']>>>;
  pointsNOTLIKE?: InputMaybe<Scalars['u16']['input']>;
  start?: InputMaybe<Scalars['u64']['input']>;
  startEQ?: InputMaybe<Scalars['u64']['input']>;
  startGT?: InputMaybe<Scalars['u64']['input']>;
  startGTE?: InputMaybe<Scalars['u64']['input']>;
  startIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  startLIKE?: InputMaybe<Scalars['u64']['input']>;
  startLT?: InputMaybe<Scalars['u64']['input']>;
  startLTE?: InputMaybe<Scalars['u64']['input']>;
  startNEQ?: InputMaybe<Scalars['u64']['input']>;
  startNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  startNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
  title?: InputMaybe<Scalars['felt252']['input']>;
  titleEQ?: InputMaybe<Scalars['felt252']['input']>;
  titleGT?: InputMaybe<Scalars['felt252']['input']>;
  titleGTE?: InputMaybe<Scalars['felt252']['input']>;
  titleIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  titleLIKE?: InputMaybe<Scalars['felt252']['input']>;
  titleLT?: InputMaybe<Scalars['felt252']['input']>;
  titleLTE?: InputMaybe<Scalars['felt252']['input']>;
  titleNEQ?: InputMaybe<Scalars['felt252']['input']>;
  titleNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  titleNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
};

export type Mancala_Stone_TrophyProgression = {
  __typename?: 'mancala_stone_TrophyProgression';
  count?: Maybe<Scalars['u32']['output']>;
  entity?: Maybe<World__Entity>;
  eventMessage?: Maybe<World__EventMessage>;
  player_id?: Maybe<Scalars['felt252']['output']>;
  task_id?: Maybe<Scalars['felt252']['output']>;
  time?: Maybe<Scalars['u64']['output']>;
};

export type Mancala_Stone_TrophyProgressionConnection = {
  __typename?: 'mancala_stone_TrophyProgressionConnection';
  edges?: Maybe<Array<Maybe<Mancala_Stone_TrophyProgressionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mancala_Stone_TrophyProgressionEdge = {
  __typename?: 'mancala_stone_TrophyProgressionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Mancala_Stone_TrophyProgression>;
};

export type Mancala_Stone_TrophyProgressionOrder = {
  direction: OrderDirection;
  field: Mancala_Stone_TrophyProgressionOrderField;
};

export enum Mancala_Stone_TrophyProgressionOrderField {
  Count = 'COUNT',
  PlayerId = 'PLAYER_ID',
  TaskId = 'TASK_ID',
  Time = 'TIME'
}

export type Mancala_Stone_TrophyProgressionWhereInput = {
  count?: InputMaybe<Scalars['u32']['input']>;
  countEQ?: InputMaybe<Scalars['u32']['input']>;
  countGT?: InputMaybe<Scalars['u32']['input']>;
  countGTE?: InputMaybe<Scalars['u32']['input']>;
  countIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  countLIKE?: InputMaybe<Scalars['u32']['input']>;
  countLT?: InputMaybe<Scalars['u32']['input']>;
  countLTE?: InputMaybe<Scalars['u32']['input']>;
  countNEQ?: InputMaybe<Scalars['u32']['input']>;
  countNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']['input']>>>;
  countNOTLIKE?: InputMaybe<Scalars['u32']['input']>;
  player_id?: InputMaybe<Scalars['felt252']['input']>;
  player_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_idGT?: InputMaybe<Scalars['felt252']['input']>;
  player_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  player_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  player_idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  player_idLT?: InputMaybe<Scalars['felt252']['input']>;
  player_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  player_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  player_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  player_idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  task_id?: InputMaybe<Scalars['felt252']['input']>;
  task_idEQ?: InputMaybe<Scalars['felt252']['input']>;
  task_idGT?: InputMaybe<Scalars['felt252']['input']>;
  task_idGTE?: InputMaybe<Scalars['felt252']['input']>;
  task_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  task_idLIKE?: InputMaybe<Scalars['felt252']['input']>;
  task_idLT?: InputMaybe<Scalars['felt252']['input']>;
  task_idLTE?: InputMaybe<Scalars['felt252']['input']>;
  task_idNEQ?: InputMaybe<Scalars['felt252']['input']>;
  task_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']['input']>>>;
  task_idNOTLIKE?: InputMaybe<Scalars['felt252']['input']>;
  time?: InputMaybe<Scalars['u64']['input']>;
  timeEQ?: InputMaybe<Scalars['u64']['input']>;
  timeGT?: InputMaybe<Scalars['u64']['input']>;
  timeGTE?: InputMaybe<Scalars['u64']['input']>;
  timeIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  timeLIKE?: InputMaybe<Scalars['u64']['input']>;
  timeLT?: InputMaybe<Scalars['u64']['input']>;
  timeLTE?: InputMaybe<Scalars['u64']['input']>;
  timeNEQ?: InputMaybe<Scalars['u64']['input']>;
  timeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']['input']>>>;
  timeNOTLIKE?: InputMaybe<Scalars['u64']['input']>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
