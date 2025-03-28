"use client";

import { useConnect } from "@starknet-react/core";
import { useStarknetkitConnectModal, StarknetkitConnector } from "starknetkit";
import { ArgentWebWallet } from '@argent/invisible-sdk';

const argentWebWallet = ArgentWebWallet.init({
    environment: "sepolia", // "sepolia" | "mainnet" (Whitelisting required)
    appName: "My App", // Your app name
    sessionParams: {
      allowedMethods: [
        // List of contracts/methods allowed to be called by the session key
        {
          contract:
            "0x036133c88c1954413150db74c26243e2af77170a4032934b275708d84ec5452f", // contract address
          selector: "increment", //function selector
        }
      ],
      validityDays: 30 // optional - session validity (in days) - default: 30
    },
    paymasterParams: {
      apiKey: "avnu paymaster api key" 
    }
});

export default function ConnectButton() {
    const { connect, connectors } = useConnect();
    const { starknetkitConnectModal } = useStarknetkitConnectModal({
      connectors: connectors as StarknetkitConnector[],
      dappName: "Mancala",
    })
    const connect_wallet = async () => {
        const { connector } = await starknetkitConnectModal()
        if (!connector) {
            return
        } else if (connector?.name === "Argent Web Wallet") {
            try {
                const response =  await argentWebWallet.requestConnection({
                   callbackData: "custom_callback_data",
                   approvalRequests: [ // array of tokens
                      {
                         tokenAddress: "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",
                         amount: BigInt("100000000000000000").toString(),
                         // Your dapp contract
                         spender: "0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a",
                      },
                   ],
                });
                console.log({
                    response
                })
            } catch (err) {
                console.error(err);
            }
        } else {
            connect({ connector })
        }
    }
    return(
        <button className="p-3.5 rounded-lg bg-black text-white" onClick={connect_wallet}>Connect Wallet</button>
    )
}