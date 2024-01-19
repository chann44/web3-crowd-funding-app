"use client";

import { cn } from "@/lib/utils";
import { ConnectWallet } from "@thirdweb-dev/react";
import { buttonVariants } from "./ui/button";

export function ConnectWalletButton() {
  return (
    <ConnectWallet
      className={cn(
        buttonVariants({
          variant: "ghost",
        })
      )}
    />
  );
}
