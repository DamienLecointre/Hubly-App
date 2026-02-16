import { AddItemData } from "@/data/editorFormData/AddItemData";

import Header from "@/components/layouts/header/Header";
import ChoicePopup from "@/components/modules/popup/ChoicePopup";

function Page() {
  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <div className="suroudedSpace_X24_YT32">
          <ChoicePopup
            goBackTo="/nouvel_element"
            title="Ajouter un nouveau produit"
            dataFile={AddItemData}
          />
        </div>
      </main>
    </>
  );
}

export default Page;
