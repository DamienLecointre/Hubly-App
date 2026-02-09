"use client";

import Link from "next/link";
import { useBarcodeScanner } from "@/hooks/utils/useBarcodeScanner";

import FeedbackPopup from "@/components/modules/popup/FeedbackPopup";
import BlurLayer from "@/components/modules/popup/BlurLayer";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import PillBtn from "@/components/ui/buttons/PillBtn";

export default function CameraPage() {
  const { scannedCode, isCameraReady, reset } = useBarcodeScanner("reader");

  return (
    <div className="flexFullHeight px-6 pt-4 pb-[calc(85px+16px)] ">
      <div className="flexColumn cardGradient px-4">
        <div className="flex items-start">
          <LinkBtn icon="arrow" link="" label="Retour" variant="base" />
        </div>
        <div>
          <h4 className="text-center">Ajouter un élément</h4>
        </div>
        <div className="relative min-h-6 w-full border border-card-border-light">
          <div id="reader" className="w-full"></div>
          {!isCameraReady && (
            <div className="absolute text-warning left-[50%] transform translate-x-[-50%]">
              Initialisation...
            </div>
          )}

          {scannedCode && (
            <>
              <FeedbackPopup
                title="Scan réussi !"
                subtitle="Votre produit a été ajouté  avec succès."
              />
              && <BlurLayer />
            </>
            // <div className="absolute text-valid bottom-0 left-[50%] transform translate-x-[-50%] pb-6">
            //   Code : <strong>{scannedCode}</strong>
            //   <button onClick={reset} className="block mt-2 underline">
            //     Scanner à nouveau
            //   </button>
            // </div>
          )}
        </div>

        <PillBtn type="button" label="Saisie manuelle" variant="bgfull" />
        {/* <Link href="/" className="w-full flex">
        </Link> */}
      </div>
    </div>
  );
}
