import { gql } from "@apollo/client";

export const GLOBAL_QUERY_FILTERED = gql`
  query global_query_filtered($gameId: u128) {
    mancalaStoneMancalaBoardModels(
      where: { game_id: $gameId }
    ) {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          last_turn_change_timestamp
          entity {
            executedAt
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GLOBAL_QUERY_ALL = gql`
  query global_query_all {
    mancalaStoneMancalaBoardModels(limit: 1000) {
      edges {
        node {
          game_id
          player_one
          player_two
          current_player
          winner
          status
          is_private
          last_turn_change_timestamp
          entity {
            executedAt
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
