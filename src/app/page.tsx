import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionHeader />
        <div>
          <h1 className="text-white">Home</h1>
        </div>
      </main>
    </div>
  );
}
