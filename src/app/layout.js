'use client'
import './globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainIds = [11155111]
const connectors = {
  injected: {},
}

export default function RootLayout({ children }) {
  // wrapping the whole app in the thirdweb for authentication
  // this will also let us access the authentication related code to be accessible from any directory of the project
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThirdwebWeb3Provider>
  )
}
