"use client";

import { ReactNode } from "react";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  cartridgeProvider,
  voyager,
  InjectedConnector,
  Connector
} from "@starknet-react/core";
import { WebWalletConnector } from "starknetkit/webwallet";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { ControllerConnector } from "@cartridge/connector";
import { constants } from "starknet";
import CONFIG, { IS_MAINNET } from "../../config";

const controller = typeof window !== "undefined" ? [
    new ControllerConnector({
        policies: CONFIG.POLICIES,
        chains: [
          { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
          { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
        ],
        defaultChainId: constants.StarknetChainId.SN_SEPOLIA,
    })
] : [];

export default function AppWrapper({ children }: { children: ReactNode }) {
    const connectors = [
        new InjectedConnector({ options: { id: "braavos", name: "Braavos" }}),
        new InjectedConnector({ options: { id: "argentX", name: "Argent X" }}),
        new WebWalletConnector({ url: "https://web.argent.xyz" }),
        new ArgentMobileConnector(),
        ...controller
    ] as Connector[];
    return(
        <StarknetConfig
            chains={[IS_MAINNET ? mainnet : sepolia]}
            provider={cartridgeProvider()}
            connectors={connectors}
            explorer={voyager}
            autoConnect
        >
            {children}
        </StarknetConfig>
    )
}