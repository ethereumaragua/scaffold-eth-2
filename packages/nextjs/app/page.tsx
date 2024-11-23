"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { Card, CardContent } from "~~/components/ui/card";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-muted text-muted-foreground font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-muted text-muted-foreground font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-muted text-muted-foreground font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        <div className="flex-grow bg-muted w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <Card className="max-w-xs">
              <CardContent className="flex flex-col items-center p-10 text-center">
                <BugAntIcon className="h-8 w-8 text-secondary" />
                <p>
                  Tinker with your smart contract using the{" "}
                  <Link href="/debug" className="text-primary hover:text-primary/80 underline underline-offset-4">
                    Debug Contracts
                  </Link>{" "}
                  tab.
                </p>
              </CardContent>
            </Card>
            <Card className="max-w-xs">
              <CardContent className="flex flex-col items-center p-10 text-center">
                <MagnifyingGlassIcon className="h-8 w-8 text-secondary" />
                <p>
                  Explore your local transactions with the{" "}
                  <Link
                    href="/blockexplorer"
                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                  >
                    Block Explorer
                  </Link>{" "}
                  tab.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
