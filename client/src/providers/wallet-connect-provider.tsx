"use client";

import type { ReactNode } from "react";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

const CLIENT_ID = "4ad5782faedc5634ec2a3269944d563e";

const CLIENT_SECRETE =
  "Yoi6KpZ29ZNhDKil2NUgaTmxrZw3JKpPDGZ99OQOko8k59q7fDPTCEYePPiBKgHVl5Eu5qQ9FO4b8JfNNXp1Iw";

export function AppWithProviders({ children }: { children: ReactNode }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId={CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
}
