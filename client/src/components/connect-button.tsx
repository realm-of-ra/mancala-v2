"use client";

import { useConnect } from "@starknet-react/core";
import { useStarknetkitConnectModal, StarknetkitConnector } from "starknetkit";

export default function ConnectButton() {
  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
    dappName: "Mancala",
  });
  const connect_wallet = async () => {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    connect({ connector });
  };
  return (
    <button
      className="p-3.5 rounded-lg bg-black text-white"
      onClick={connect_wallet}
    >
      Connect Wallet
    </button>
  );
}
