import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Banner, Hero, Nft } from '@components/sections';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nft />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
