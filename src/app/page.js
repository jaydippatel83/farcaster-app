'use client';
import { Login } from "@/components/SignIn";
import Layout from "@/components/layout/layout";
import { AuthKitProvider} from '@farcaster/auth-kit';

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'example.com',
  siweUri: 'https://example.com/login',
};

export default function Home() {
  return (
    <AuthKitProvider config={config}>
      <Layout>
        <Login />
      </Layout>
    </AuthKitProvider>
  );
}
