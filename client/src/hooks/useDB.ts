import { useReactiveVar, makeVar } from "@apollo/client";
import { useEffect } from "react";
import { MancalaBoard } from "../../types";
import { apolloClient } from "@/apollo";
import { GLOBAL_QUERY_FILTERED, GLOBAL_QUERY_ALL } from "../../queries";

const globalDataVar = makeVar<{
  data: MancalaBoard | null;
  started: boolean;
}>({
  data: null,
  started: false,
});

let pollingInterval: NodeJS.Timeout | null = null;

export async function initializeGlobalDb(gameId?: string) {
  if (globalDataVar().started) return;

  const query = gameId ? GLOBAL_QUERY_FILTERED : GLOBAL_QUERY_ALL;

  const fetchData = async () => {
    try {
      const { data } = await apolloClient.query<MancalaBoard>({
        query,
        variables: gameId ? { gameId } : {},
        fetchPolicy: "network-only",
      });

      globalDataVar({
        data: data || null,
        started: true,
      });
    } catch (error) {
      console.error("Error fetching global data:", error);
    }
  };

  await fetchData();

  if (!pollingInterval) {
    pollingInterval = setInterval(fetchData, 5000);
  }
}

export function useDB(gameId?: string) {
  useEffect(() => {
    initializeGlobalDb(gameId);

    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
        pollingInterval = null;
      }
    };
  }, [gameId]);

  return useReactiveVar(globalDataVar);
}