import { AddElementData } from "@/data/editorFormData/AddElementData";
import Header from "@/components/layouts/header/Header";
import ChoicePopup from "@/components/modules/popup/ChoicePopup";

function Page() {
  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <div className="suroudedSpace_X24_YT32">
          <ChoicePopup
            goBackTo="/"
            title="Que voulez-vous créer ?"
            dataFile={AddElementData}
          />
        </div>
      </main>
    </>
  );
}

export default Page;
