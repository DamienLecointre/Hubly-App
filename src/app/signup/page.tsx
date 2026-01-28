"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/SignupContext";
import { useSignupSubmit } from "@/hooks/useSignupSubmit";

import LinkBtn from "@/components/ui/buttons/LinkBtn";
import SignupForm from "@/components/modules/forms/SignupForm";
import PillBtn from "@/components/ui/buttons/PillBtn";
import Footer from "@/components/layouts/footer/Footer";

function Page() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const { errorMessage } = signupContext;

  const { handleSubmit } = useSignupSubmit();

  return (
    <div className="flexFullHeigh w-full ">
      <main className="flexFullHeigh suroudedSpace_X24_YT32">
        <div className="flex items-start pb-6">
          <LinkBtn icon="arrow" link="/login" label="Retour" variant="base" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flexFullHeigh justify-between gap-8"
        >
          <h1 className="text-primary text-center">Créez votre compte</h1>
          <SignupForm />
          <div className="flexColumn gap-4">
            {errorMessage === "required" && (
              <p className="text-warning text-center">
                Tous les champs du formulaire doivent être rempli
              </p>
            )}
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
