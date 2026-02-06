import Header from "@/components/layouts/header/Header";
import AddedOptionPopup from "@/components/modules/popup/AddedOptionPopup";
import BlurLayer from "@/components/modules/popup/BlurLayer";

function page() {
  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <div className="suroudedSpace_X24_YT32">
          <AddedOptionPopup />
          <BlurLayer />
        </div>
      </main>
      {/* <h2 className="text-white">New collection</h2> */}
    </>
  );
}

export default page;
