import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-82px-85px)] overflow-y-auto">
        <SectionHeader />
        <div>
          <h1 className="text-white">Home</h1>
        </div>
      </main>
    </>
  );
}
