"use client";

import { ConnectWalletButton } from "@/components/connect-wallet-button";

export function SiteHeader() {
  return (
    <header className="flex container border-b py-2 justify-between items-center">
      <h1 className="text-4xl font-semibold">Side Kicks</h1>
      <ConnectWalletButton />
    </header>
  );
}
