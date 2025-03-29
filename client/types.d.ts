export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface Entity {
  executedAt?: string;
  updatedAt?: string;
}

export interface MancalaBoard {
  game_id: string;
  player_one: string;
  player_two: string;
  current_player: string;
  winner: string | null;
  status: string;
  is_private: boolean;
  last_turn_change_timestamp: string;
  entity?: Entity;
}

export interface MancalaPlayer {
  address: string;
  game_id: string;
  len_pits: number;
  restart_requested: boolean;
}

export interface MancalaPit {
  game_id: string;
  player: string;
  seed_count: number;
  pit_number: number;
}

export interface MancalaSeed {
  game_id: string;
  pit_number: number;
  player: string;
  seed_number: number;
  color: string;
  seed_id: string;
  entity?: Entity;
}

export interface MancalaGame {
  game_id: string;
  player_one: string;
  player_two: string;
  current_player: string;
  winner: string | null;
  status: string;
  is_private: boolean;
}

export interface MancalaProfile {
  name: string;
  address: string;
  profile_uri: string;
}

export interface MancalaCapture {
  game_id: string;
  player: string;
  seed_count: number;
  pit_number: number;
}

export interface MancalaExtraTurn {
  player: string;
}

export interface Edge<T> {
  node: T;
}

export interface Connection<T> {
  edges: Edge<T>[];
  pageInfo: PageInfo;
}

export interface GlobalQueryData {
  mancalaStoneMancalaBoardModels: Connection<MancalaBoard>;
  mancalaStonePlayerModels: Connection<MancalaPlayer>;
  mancalaStonePitModels: Connection<MancalaPit>;
  mancalaStoneSeedModels: Connection<MancalaSeed>;
  mancalaStoneGameModels: Connection<MancalaGame>;
  mancalaStoneProfileModels: Connection<MancalaProfile>;
  mancalaStoneCaptureModels: Connection<MancalaCapture>;
  mancalaStonePlayerExtraTurnModels: Connection<MancalaExtraTurn>;
}

export interface GlobalQueryVariables {
  gameId: string;
  first?: number;
  after?: string;
}

export interface GlobalSubscriptionData {
  mancalaStoneGameUpdated?: MancalaBoard;
  mancalaStonePlayerUpdated?: MancalaPlayer;
  mancalaStonePitUpdated?: MancalaPit;
  mancalaStoneSeedUpdated?: MancalaSeed;
}

export interface GlobalSubscriptionVariables {
  gameId: string;
}
