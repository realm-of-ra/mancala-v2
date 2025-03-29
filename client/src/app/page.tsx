"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import small_logo from "../../public/small-logo.png";
import link from "../../public/link-out.png";
import { useAccount, useConnect } from "@starknet-react/core";
import Link from "next/link";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import Bubble from "@/components/ui/svgs/bubble";
import { Button } from "@/components/ui/button";
import { useDB } from "@/hooks/useDB";

export default function Home() {
  const { isConnected } = useAccount();
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
  const { data, started } = useDB();
  console.log({
    data,
    started,
  });
  return (
    <div className="bg-[#0F1116] bg-[url('/bg.png')] bg-cover bg-center w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[url('/home-box.png')] bg-cover bg-center bg-no-repeat w-[874px] h-[486px] flex flex-col items-center justify-center space-y-20">
        <Image src={logo} alt="logo" className="w-56 h-16" draggable={false} />
        <div className="flex flex-col space-y-5 text-center">
          {isConnected ? (
            <Link href="/lobby" prefetch={true}>
              <button className="bg-[#1A1D25] text-[#F58229] py-2.5 px-7 rounded-full flex flex-row items-center justify-center space-x-1">
                <Bubble />
                <p>Go to lobby</p>
              </button>
            </Link>
          ) : (
            <Button
              className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl"
              onClick={connect_wallet}
            >
              <div className="flex flex-row items-center space-x-1">
                <p className="text-[#FCE3AA] font-medium">Connect Wallet</p>
              </div>
            </Button>
          )}
          <Link
            href="/"
            className="flex flex-row items-center justify-center space-x-1"
            prefetch={true}
          >
            <p className="text-[#C7CAD4]">Learn more</p>
            <Image
              src={link}
              width={16}
              height={16}
              alt="link"
              draggable={false}
            />
          </Link>
        </div>
      </div>
      <Link href={"/"} prefetch={true}>
        <Image
          src={small_logo}
          alt="logo"
          className="w-24 h-16 absolute bottom-5"
          draggable={false}
        />
      </Link>
    </div>
  );
}
