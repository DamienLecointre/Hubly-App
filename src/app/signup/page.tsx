"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { useSignupSubmit } from "@/hooks/forms/useSignupSubmit";

import FeedbackPopup from "@/components/modules/popup/FeedbackPopup";
import BlurLayer from "@/components/modules/popup/BlurLayer";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import SignupForm from "@/components/modules/forms/SignupForm";
import PillBtn from "@/components/ui/buttons/PillBtn";
import Footer from "@/components/layouts/footer/Footer";
import { useInputFieldWarning } from "@/hooks/inputs/useInputFieldWarning";

function Page() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const { errorMessage, submitValid } = signupContext;

  const { handleSigupSubmit } = useSignupSubmit();

  const errorWarning = useInputFieldWarning(errorMessage);

  return (
    <div className="flexFullHeight w-full ">
      <main className="flexFullHeight suroudedSpace_X24_YT32">
        {submitValid && (
          <>
            <FeedbackPopup
              title="Félicitation !"
              subtitle="Votre compte a été créé  avec succès."
            />
            && <BlurLayer />
          </>
        )}
        <div className="flex items-start pb-6">
          <LinkBtn icon="arrow" link="/login" label="Retour" variant="base" />
        </div>
        <form
          onSubmit={handleSigupSubmit}
          className="flexFullHeight justify-between gap-8"
        >
          <h1 className="text-primary text-center">Créez votre compte</h1>
          <SignupForm />
          <div className="flexColumn gap-4">
            {errorWarning}
            <PillBtn type="submit" label="Créer mon compte" variant="bgfull" />
            <div className="centerChild gap-2">
              <p className="caption text-primary">Déjà un compte ?</p>
              <LinkBtn
                icon="empty"
                link="/login"
                label="Connectez vous"
                variant="accent"
              />
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
