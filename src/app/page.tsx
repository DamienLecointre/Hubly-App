import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";
import CollectionCard from "@/components/modules/cards/CollectionCard";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionHeader title="Mes Collections" quantity={5} />
        {/* X = Valeur dynamique */}
        <div className="suroudedSpace_X24_YT32">
          <CollectionCard />
          <h1 className="text-white">Home</h1>
        </div>
      </main>
    </>
  );
}
