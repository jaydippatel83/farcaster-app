'use client';
import { Login } from "@/components/SignIn";
import Image from "next/image";
import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'example.com',
  siweUri: 'https://example.com/login',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthKitProvider config={config}>
       <Login/>
      </AuthKitProvider> 
    </main>
  );
}
